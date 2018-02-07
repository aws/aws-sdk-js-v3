import {addGlacierApiVersion} from './add-glacier-api-version';
import {UploadArchiveOperation} from './operation.mock';


describe('addGlacierApiVersion', () => {
    const mockNextHandler = jest.fn();
    const mockExecutionContext = {
        model: UploadArchiveOperation,
        logger: {} as any
    };
    const mockHandlerArgs = {
        request: {
            headers: {}
        }
    };
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('sets the x-amz-glacier-version header', async () => {
        const handler = addGlacierApiVersion(mockNextHandler, mockExecutionContext)

        await handler(mockHandlerArgs as any);
        
        // ensure the next handler was called
        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {request} = mockNextHandler.mock.calls[0][0];
        expect(request.headers['x-amz-glacier-version']).toBe('2012-06-01');
    });
});