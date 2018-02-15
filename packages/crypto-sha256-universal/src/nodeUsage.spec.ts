import {Sha256} from './';
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
