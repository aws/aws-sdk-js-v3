import {BuildHandlerArguments} from '@aws-sdk/types';
import {addExpectContinue} from './index';
import {PutObject} from './operation.mock';

describe('addExpectContinue', () => {
    const mockNextHandler = jest.fn();
    const mockExecutionContext = {
        model: PutObject,
        logger: {} as any
    };
    const mockHandlerArgs: Partial<BuildHandlerArguments<any>> = {
        request: {
            headers: {},
            method: 'PUT',
            path: '/',
            protocol: 'https:',
            hostname: 'foo.amazonaws.com'
        }
    };
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('sets the Expect header to 100-continue if there is a request body', async () => {
        const handler = addExpectContinue(mockNextHandler, mockExecutionContext)
        const handlerArgs = {
            request: {
                ...mockHandlerArgs.request,
                body: 'test'
            }
        };

        await handler(handlerArgs as any);
        
        // ensure the next handler was called
        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['Expect']).toBe('100-continue');
    });

    it('does not set the Expect header to 100-continue if there is no request body', async () => {
        const handler = addExpectContinue(mockNextHandler, mockExecutionContext)
        const handlerArgs = {
            request: {
                ...mockHandlerArgs.request
            }
        };

        await handler(handlerArgs as any);
        
        // ensure the next handler was called
        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['Expect']).toBeUndefined();
    });
});