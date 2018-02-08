import {inputDefault} from './index';

interface MockInput {
    foo?: string;
    bar?: 'bizz'|'buzz';
    x: number;
}

describe('inputDefault', () => {
    const mockNextHandler = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should set default input fields when not provided', async () => {
        const middleware = inputDefault<MockInput>({
            foo: 'test'
        });
        const handler = middleware(mockNextHandler, {} as any);

        await handler({
            input: {
                x: 3.14
            }
        });

        // ensure the next handler was called
        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {input} = mockNextHandler.mock.calls[0][0];
        expect(input['foo']).toBe('test');
        expect(input['x']).toBe(3.14);
    });

    it('should not override user-supplied parameters', async () => {
        const middleware = inputDefault<MockInput>({
            foo: 'test'
        });
        const handler = middleware(mockNextHandler, {} as any);

        await handler({
            input: {
                foo: 'fantastic',
                x: 3.14
            }
        });

        // ensure the next handler was called
        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {input} = mockNextHandler.mock.calls[0][0];
        expect(input['foo']).toBe('fantastic');
        expect(input['x']).toBe(3.14);
    });

    it('should not mutate user input', async () => {
        const middleware = inputDefault<MockInput>({
            foo: 'test'
        });
        const handler = middleware(mockNextHandler, {} as any);
        const userInput: MockInput = {
            x: 4
        }
        await handler({
            input: userInput
        });

        // ensure the next handler was called
        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {input} = mockNextHandler.mock.calls[0][0];
        expect(input['foo']).toBe('test');
        expect(input['x']).toBe(4);
        expect(userInput['x']).toBe(4);
        expect(Object.keys(userInput).length).toBe(1);
    });
});