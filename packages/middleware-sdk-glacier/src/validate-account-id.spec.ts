import {Handler} from '@aws/types';
import {validateAccountId} from './validate-account-id';

describe('validateAccountId', () => {
    const mockNextHandler = jest.fn(() => Promise.resolve());

    const composedHandler: Handler<any, any> = validateAccountId(mockNextHandler);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it(`sets accountId to '-' if it is undefined within user input`, async () => {
        const userInput: {accountId?: string;} = {};
        await composedHandler({
            input: userInput
        });

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {input} = mockNextHandler.mock.calls[0][0];
        expect(input.accountId).toBe('-');
        expect(userInput.accountId).toBeUndefined();
    });

    it('does not override accountId if it is already set by the user', async () => {
        const userInput: {accountId?: string;} = {
            accountId: 'fake-id'
        };
        await composedHandler({
            input: userInput
        });

        expect(mockNextHandler.mock.calls.length).toBe(1);
        const {input} = mockNextHandler.mock.calls[0][0];
        expect(input.accountId).toBe('fake-id');
    });
});