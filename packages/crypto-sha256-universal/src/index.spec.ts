import {Sha256} from './';
import {Sha256 as BrowserSha256} from '@aws/crypto-sha256-browser';
import {Sha256 as NodeSha256} from '@aws/crypto-sha256-node';

describe('implementation selection', () => {
    /**
     * This test must come first, as the resolved `cypto` module will be cached
     * if its does not throw an error during resolution.
     */
    it(
        'should use the browser implementation when the crypto module is not defined',
        () => {
            jest.mock('crypto', () => {
                throw new Error('Crypto module is not defined');
            });

            const sha256 = new Sha256();
            expect((sha256 as any).hash).toBeInstanceOf(BrowserSha256);
        }
    );

    it(
        'should use the node implementation when the crypto module is defined',
        () => {
            jest.mock('crypto', () => {
                return {};
            });

            const sha256 = new Sha256();
            expect((sha256 as any).hash).toBeInstanceOf(NodeSha256);
        }
    );

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
