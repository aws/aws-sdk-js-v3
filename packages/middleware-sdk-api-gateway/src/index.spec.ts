import {BuildHandler} from '@aws-sdk/types';
import {acceptsHeader} from './index';

describe('acceptsHeader', () => {
    const mockNextHandler = jest.fn(() => Promise.resolve());

    const composedHandler: BuildHandler<any, any> = acceptsHeader(mockNextHandler);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('sets Accepts header to application/json', async () => {
        await composedHandler({
            input: {},
            request: {
                hostname: 'foo.amazonaws.com',
                path: '/',
                protocol: 'https:',
                method: 'GET',
                headers: {}
            }
        });

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['accepts']).toBe('application/json');
    });
});
