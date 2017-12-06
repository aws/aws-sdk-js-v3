import {Sha256} from './';
import {Sha256 as BrowserSha256} from '@aws/crypto-sha256-browser';
import {Hash} from '@aws/hash-node';

describe('Sha256', () => {
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

        sha256.digest();
        expect(hashMock.digest.mock.calls.length).toBe(1);
    });
});
