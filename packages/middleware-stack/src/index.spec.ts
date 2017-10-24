import {MiddlewareStack} from "./";
import {HandlerArguments, Middleware} from "@aws/types";

describe('MiddlewareStack', () => {
    it('should resolve the stack into a composed handler', async () => {
        const stack = new MiddlewareStack<Array<string>, object>();
        stack.prependInit(next => args => next({
            ...args,
            input: args.input.concat('first')
        }));
        stack.appendBuild(next => args => next({
            ...args,
            input: args.input.concat('fourth')
        }));
        stack.appendInit(next => args => next({
            ...args,
            input: args.input.concat('second')
        }));
        stack.prependBuild(next => args => next({
            ...args,
            input: args.input.concat('third')
        }));
        stack.appendSign(next => args => next({
            ...args,
            input: args.input.concat('sixth')
        }));
        stack.prependSign(next => args => next({
            ...args,
            input: args.input.concat('fifth')
        }));

        const inner = jest.fn(({input}: HandlerArguments<Array<string>>) => {
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
        const composed = stack.resolve(inner);
        await composed({input: []});

        expect(inner.mock.calls.length).toBe(1);
    });

    it('should allow cloning', async () => {
        const stack = new MiddlewareStack<Array<string>, object>();
        stack.appendInit(next => args => next({
            ...args,
            input: args.input.concat('second')
        }));
        stack.prependInit(next => args => next({
            ...args,
            input: args.input.concat('first')
        }));

        const secondStack = stack.clone();

        let inner = jest.fn(({input}: HandlerArguments<Array<string>>) => {
            expect(input).toEqual([
                'first',
                'second',
            ]);
            return Promise.resolve({});
        });
        await secondStack.resolve(inner)({input: []});
        expect(inner.mock.calls.length).toBe(1);
    });

    it('should allow the removal of middleware by object identity', async () => {
        const stack = new MiddlewareStack<Array<string>, object>();
        let middleware: Middleware<Array<string>, object> = next => args => next({
            ...args,
            input: args.input.concat('first')
        });
        stack.prependInit(middleware);

        await stack.resolve(({input}: HandlerArguments<Array<string>>) => {
            expect(input).toEqual([
                'first',
            ]);
            return Promise.resolve({});
        })({input: []});

        stack.remove(middleware);

        await stack.resolve(({input}: HandlerArguments<Array<string>>) => {
            expect(input).toEqual([]);
            return Promise.resolve({});
        })({input: []});
    });

    it('should allow the removal of middleware by name', async () => {
        const stack = new MiddlewareStack<Array<string>, object>();
        stack.prependInit(next => args => next({
            ...args,
            input: args.input.concat('first')
        }), 'first');

        await stack.resolve(({input}: HandlerArguments<Array<string>>) => {
            expect(input).toEqual([
                'first',
            ]);
            return Promise.resolve({});
        })({input: []});

        stack.remove('first');

        await stack.resolve(({input}: HandlerArguments<Array<string>>) => {
            expect(input).toEqual([]);
            return Promise.resolve({});
        })({input: []});
    });
});
