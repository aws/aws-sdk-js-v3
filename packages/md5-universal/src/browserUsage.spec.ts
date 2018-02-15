import {Md5} from './';
import {Md5 as BrowserMd5} from '@aws/md5-js';
import {Hash} from '@aws/hash-node';

describe('implementation selection', () => {
    it(
        'should use the browser implementation when the crypto module is not defined',
        () => {
            jest.mock('crypto', () => {
                throw new Error('Crypto module is not defined');
            });

            const md5 = new Md5();
            expect((md5 as any).hash).toBeInstanceOf(BrowserMd5);
        }
    );
});
