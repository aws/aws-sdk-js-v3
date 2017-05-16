import {Sha256} from '../';
import {Sha256 as BrowserSha256} from '@aws/crypto-sha256-browser';
import {Sha256 as NodeSha256} from '@aws/crypto-sha256-node';

jest.mock('@aws/is-node', () => {
    return { isNode: jest.fn() };
});
import {isNode} from '@aws/is-node';

beforeEach(() => {
    (isNode as any).mockReset();
});

describe('implementation selection', () => {
    it('should use the node implementation in node', async () => {
        (isNode as any).mockReturnValue(true);

        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(NodeSha256);
    });

    it('should use the browser implementation elsewhere', async () => {
        (isNode as any).mockReturnValue(false);

        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(BrowserSha256);
    });

    it('should proxy method calls to underlying implementation', () => {
        const sha256 = new Sha256();
        const hashMock = {
            update: jest.fn(),
            digest: jest.fn(),
        };
        (sha256 as any).hash = hashMock;

        sha256.update('foo', 'utf8');
        expect(hashMock.update.mock.calls.length).toBe(1);
        expect(hashMock.update.mock.calls[0]).toEqual(['foo', 'utf8']);

        const promise = sha256.digest();
        expect(hashMock.digest.mock.calls.length).toBe(1);
    });
});
