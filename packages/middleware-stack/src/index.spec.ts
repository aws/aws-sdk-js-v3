import {MiddlewareStack} from "./";
import {
    Handler,
    HandlerArguments,
} from "@aws/types";

type input = Array<string>;
type output = object;
type handler = Handler<input, output>;

class ConcatMiddleware implements handler {
    constructor(
        private readonly message: string,
        private readonly next: handler
    ) {}

    handle(args: HandlerArguments<input>): Promise<output> {
        return this.next.handle({
            ...args,
            input: args.input.concat(this.message),
        })
    }
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
        const stack = new MiddlewareStack<handler>();

        const middleware = shuffle([
            [ConcatMiddleware.bind(null, 'second')],
            [ConcatMiddleware.bind(null, 'first'), {priority: 10}],
            [ConcatMiddleware.bind(null, 'fourth'), {step: 'build'}],
            [
                ConcatMiddleware.bind(null, 'third'),
                {step: 'build', priority: 1}
            ],
            [ConcatMiddleware.bind(null, 'fifth'), {step: 'finalize'}],
            [
                ConcatMiddleware.bind(null, 'sixth'),
                {step: 'finalize', priority: -1}
            ],
        ]);

        for (const [mw, options] of middleware) {
            stack.add(mw, options);
        }

        const inner = {
            handle: jest.fn(({input}: HandlerArguments<input>) => {
                expect(input).toEqual([
                    'first',
                    'second',
                    'third',
                    'fourth',
                    'fifth',
                    'sixth',
                ]);
                return {};
            })
        };
        const composed = stack.resolve(inner, {} as any);
        await composed.handle({input: []});

        expect(inner.handle.mock.calls.length).toBe(1);
    });

    it('should allow cloning', async () => {
        const stack = new MiddlewareStack<handler>();
        stack.add(ConcatMiddleware.bind(null, 'second'));
        stack.add(ConcatMiddleware.bind(null, 'first'), {priority: 100});

        const secondStack = stack.clone();

        let inner = {
            handle: jest.fn(({input}: HandlerArguments<input>) => {
                expect(input).toEqual([
                    'first',
                    'second',
                ]);
                return Promise.resolve({});
            })
        };
        await secondStack.resolve(inner, {} as any).handle({input: []});
        expect(inner.handle.mock.calls.length).toBe(1);
    });

    it('should allow combining stacks', async () => {
        const stack = new MiddlewareStack<handler>();
        stack.add(ConcatMiddleware.bind(null, 'second'));
        stack.add(ConcatMiddleware.bind(null, 'first'), {priority: 100});

        const secondStack = new MiddlewareStack<handler>();
        secondStack.add(ConcatMiddleware.bind(null, 'fourth'), {step: 'build'});
        secondStack.add(
            ConcatMiddleware.bind(null, 'third'),
            {step: 'build', priority: 100}
        );

        let inner = {
            handle: jest.fn(({input}: HandlerArguments<input>) => {
                expect(input).toEqual([
                    'first',
                    'second',
                    'third',
                    'fourth',
                ]);
                return Promise.resolve({});
            })
        };
        await stack.concat(secondStack).resolve(inner, {} as any)
            .handle({input: []});

        expect(inner.handle.mock.calls.length).toBe(1);
    });

    it('should allow the removal of middleware by constructor identity', async () => {
        const MyMiddleware = ConcatMiddleware.bind(null, 'remove me!');
        const stack = new MiddlewareStack<handler>();
        stack.add(MyMiddleware);
        stack.add(ConcatMiddleware.bind(null, "don't remove me"));

        await stack.resolve({
                handle: ({input}: HandlerArguments<Array<string>>) => {
                expect(input.sort()).toEqual([
                    "don't remove me",
                    'remove me!',
                ]);
                return Promise.resolve({});
            }
        }, {} as any).handle({input: []});

        stack.remove(MyMiddleware);

        await stack.resolve({
            handle: ({input}: HandlerArguments<Array<string>>) => {
                expect(input).toEqual(["don't remove me"]);
                return Promise.resolve({});
            }
        }, {} as any).handle({input: []});
    });

    it('should allow the removal of middleware by tag', async () => {
        const stack = new MiddlewareStack<handler>();
        stack.add(
            ConcatMiddleware.bind(null, 'not removed'),
            {tags: new Set(['foo', 'bar'])}
        );
        stack.add(
            ConcatMiddleware.bind(null, 'remove me!'),
            {tags: new Set(['foo', 'bar', 'baz'])}
        );

        await stack.resolve({
            handle: ({input}: HandlerArguments<Array<string>>) => {
                expect(input.sort()).toEqual([
                    'not removed',
                    'remove me!',
                ]);
                return Promise.resolve({});
            }
        }, {} as any).handle({input: []});

        stack.remove('baz');

        await stack.resolve({
            handle: ({input}: HandlerArguments<Array<string>>) => {
                expect(input).toEqual(['not removed']);
                return Promise.resolve({});
            }
        }, {} as any).handle({input: []});
    });
});
