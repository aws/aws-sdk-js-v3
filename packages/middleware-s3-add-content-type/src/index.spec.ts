import { addContentType } from '.';

describe('Add ContentType Middleware for Node', () => {
    const nextHandler = jest.fn(() => Promise.resolve());
    const composedHandler = addContentType(nextHandler, {} as any);
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('should add Content-Type header to request', async () => {
        const args = {request: {headers: {}}};
        const res = await composedHandler(args as any);
        expect(nextHandler.mock.calls.length).toBe(1);
        const output = nextHandler.mock.calls[0][0];
        expect(output.request.headers).toMatchObject({'Content-Type': 'application/octet-stream'})
    })

    it('should not set Content-Type header for GET and HEAD methods', async () => {
        for (const method of ['HEAD', 'GET']) {
            jest.clearAllMocks();
            const args = {request: {
                headers: {},
                method: method
            }};
            await composedHandler(args as any);
            expect(nextHandler.mock.calls.length).toBe(1);
            let output = nextHandler.mock.calls[0][0];
            expect(output.request.headers).not.toMatchObject({'Content-Type': 'application/octet-stream'});
        }
    })
})
