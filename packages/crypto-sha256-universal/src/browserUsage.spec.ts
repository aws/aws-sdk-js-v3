import {Sha256} from './';
import {Sha256 as BrowserSha256} from '@aws-sdk/crypto-sha256-browser';
import {Hash} from '@aws-sdk/hash-node';

describe('implementation selection', () => {
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
});
