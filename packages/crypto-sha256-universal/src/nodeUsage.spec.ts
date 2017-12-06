import {Sha256} from './';
import {Sha256 as BrowserSha256} from '@aws/crypto-sha256-browser';
import {Hash} from '@aws/hash-node';

jest.mock('crypto', () => {
    return {
        createHash: jest.fn()
    };
});

describe('implementation selection', () => {
    it(
        'should use the node implementation when the crypto module is defined',
        () => {
            const sha256 = new Sha256();
            expect((sha256 as any).hash).toBeInstanceOf(Hash);
        }
    );
});
