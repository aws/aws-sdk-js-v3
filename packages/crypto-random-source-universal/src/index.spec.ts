import {randomValues} from './';

jest.mock('@aws/crypto-random-source-browser', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as browserRandomValues} from '@aws/crypto-random-source-browser';
jest.mock('@aws/crypto-random-source-node', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as nodeRandomValues} from '@aws/crypto-random-source-node';
jest.mock('@aws/is-node', () => {
    return { isNode: jest.fn() };
});
import {isNode} from '@aws/is-node';

beforeEach(() => {
    (browserRandomValues as any).mockReset();
    (nodeRandomValues as any).mockReset();
    (isNode as any).mockReset();
});

describe('implementation selection', () => {
    it('should use the node implementation in node', async () => {
        (isNode as any).mockImplementation(() => true);

        await randomValues(1);

        expect((nodeRandomValues as any).mock.calls.length).toBe(1);
        expect((browserRandomValues as any).mock.calls.length).toBe(0);
    });

    it('should use the browser implementation elsewhere', async () => {
        (isNode as any).mockImplementation(() => false);

        await randomValues(1);

        expect((nodeRandomValues as any).mock.calls.length).toBe(0);
        expect((browserRandomValues as any).mock.calls.length).toBe(1);
    });
});
