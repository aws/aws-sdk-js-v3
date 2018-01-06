import {MiddlewareStack} from "./";
import {
    Handler,
    HandlerArguments,
    FinalizeHandlerArguments,
} from "@aws/types";

type input = Array<string>;
type output = object;

function concatMiddleware(
    message: string,
    next: Handler<input, output>
): Handler<input, output> {
    return (args: HandlerArguments<input>): Promise<output> => next({
        ...args,
        input: args.input.concat(message),
    });
}

function shuffle<T>(arr: Array<T>): Array<T> {
    arr = [...arr];
    for (let i = arr.length; i > 0; i--) {
        const rand = Math.floor(Math.random() * i);
        const curr = i - 1;
        [arr[curr], arr[rand]] = [arr[rand], arr[curr]];
    }
    return arr;
}

describe('MiddlewareStack', () => {
    it('should resolve the stack into a composed handler', async () => {
        const stack = new MiddlewareStack<input, output>();

        const middleware = shuffle([
            [concatMiddleware.bind(null, 'second')],
            [concatMiddleware.bind(null, 'first'), {priority: 10}],
            [concatMiddleware.bind(null, 'fourth'), {step: 'build'}],
            [
                concatMiddleware.bind(null, 'third'),
                {step: 'build', priority: 1}
            ],
            [concatMiddleware.bind(null, 'fifth'), {step: 'finalize'}],
            [
                concatMiddleware.bind(null, 'sixth'),
                {step: 'finalize', priority: -1}
            ],
        ]);

        for (const [mw, options] of middleware) {
            stack.add(mw, options);
        }

        const inner = jest.fn(({input}: FinalizeHandlerArguments<input>) => {
            expect(input).toEqual([
                'first',
                'second',
                'third',
                'fourth',
                'fifth',
                'sixth',
            ]);
            return {};
        });

        const composed = stack.resolve(inner, {} as any);
        await composed({input: []});

        expect(inner.mock.calls.length).toBe(1);
    });

    it('should allow cloning', async () => {
        const stack = new MiddlewareStack<input, output>();
        stack.add(concatMiddleware.bind(null, 'second'));
        stack.add(concatMiddleware.bind(null, 'first'), {priority: 100});

        const secondStack = stack.clone();

        let inner = jest.fn(({input}: FinalizeHandlerArguments<input>) => {
            expect(input).toEqual([
                'first',
                'second',
            ]);
            return Promise.resolve({});
        });
        await secondStack.resolve(inner, {} as any)({input: []});
        expect(inner.mock.calls.length).toBe(1);
    });

    it('should allow combining stacks', async () => {
        const stack = new MiddlewareStack<input, output>();
        stack.add(concatMiddleware.bind(null, 'second'));
        stack.add(concatMiddleware.bind(null, 'first'), {priority: 100});

        const secondStack = new MiddlewareStack<input, output>();
        secondStack.add(concatMiddleware.bind(null, 'fourth'), {step: 'build'});
        secondStack.add(
            concatMiddleware.bind(null, 'third'),
            {step: 'build', priority: 100}
        );

        let inner = jest.fn(({input}: FinalizeHandlerArguments<input>) => {
            expect(input).toEqual([
                'first',
                'second',
                'third',
                'fourth',
            ]);
            return Promise.resolve({});
        });
        await stack.concat(secondStack).resolve(inner, {} as any)({input: []});

        expect(inner.mock.calls.length).toBe(1);
    });

    it('should allow the removal of middleware by constructor identity', async () => {
        const MyMiddleware = concatMiddleware.bind(null, 'remove me!');
        const stack = new MiddlewareStack<input, output>();
        stack.add(MyMiddleware);
        stack.add(concatMiddleware.bind(null, "don't remove me"));

        await stack.resolve(
                ({input}: FinalizeHandlerArguments<Array<string>>) => {
                expect(input.sort()).toEqual([
                    "don't remove me",
                    'remove me!',
                ]);
                return Promise.resolve({});
            },
            {} as any
        )({input: []});

        stack.remove(MyMiddleware);

        await stack.resolve(
            ({input}: FinalizeHandlerArguments<Array<string>>) => {
                expect(input).toEqual(["don't remove me"]);
                return Promise.resolve({});
            },
            {} as any
        )({input: []});
    });

    it('should allow the removal of middleware by tag', async () => {
        const stack = new MiddlewareStack<input, output>();
        stack.add(
            concatMiddleware.bind(null, 'not removed'),
            {tags: {foo: true, bar: true}}
        );
        stack.add(
            concatMiddleware.bind(null, 'remove me!'),
            {tags: {foo: true, bar: true, baz: true}}
        );

        await stack.resolve(
            ({input}: FinalizeHandlerArguments<Array<string>>) => {
                expect(input.sort()).toEqual([
                    'not removed',
                    'remove me!',
                ]);
                return Promise.resolve({});
            },
            {} as any
        )({input: []});

        stack.remove('baz');

        await stack.resolve(
            ({input}: FinalizeHandlerArguments<Array<string>>) => {
                expect(input).toEqual(['not removed']);
                return Promise.resolve({});
            },
            {} as any
        )({input: []});
    });
});
