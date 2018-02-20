import {Md5} from './';
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
            const md5 = new Md5();
            expect((md5 as any).hash).toBeInstanceOf(Hash);
        }
    );
});
