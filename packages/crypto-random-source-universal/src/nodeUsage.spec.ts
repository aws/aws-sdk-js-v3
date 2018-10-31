import {randomValues} from './';

jest.mock('crypto', () => {
    return {};
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
        'should use the node implementation when the crypto module is defined',
        async () => {
            jest.mock('crypto', () => {
                return {};
            });

            await randomValues(1);

            expect((nodeRandomValues as any).mock.calls.length).toBe(1);
            expect((browserRandomValues as any).mock.calls.length).toBe(0);
        }
    );
});
