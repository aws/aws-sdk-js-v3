import {randomValues} from './';

jest.mock('crypto', () => {
    throw new Error('Crypto module is not defined');
});

jest.mock('@aws-sdk/crypto-random-source-browser', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as browserRandomValues} from '@aws-sdk/crypto-random-source-browser';
jest.mock('@aws-sdk/crypto-random-source-node', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as nodeRandomValues} from '@aws-sdk/crypto-random-source-node';

beforeEach(() => {
    (browserRandomValues as any).mockReset();
    (nodeRandomValues as any).mockReset();
});

describe('implementation selection', () => {
    it(
        'should use the browser implementation when the crypto module is not defined',
        async () => {
            await randomValues(1);

            expect((nodeRandomValues as any).mock.calls.length).toBe(0);
            expect((browserRandomValues as any).mock.calls.length).toBe(1);
        }
    );
});
