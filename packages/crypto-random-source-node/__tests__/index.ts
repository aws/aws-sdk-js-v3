import {randomValues} from "../";
import {Buffer} from 'buffer';

jest.mock('crypto');

const {__setByteSource, __clearByteSource} = require('crypto');

beforeEach(__clearByteSource);

describe('randomValues', () => {
    it('should return a promise fulfilled with random bytes', async () => {
        __setByteSource(
            (size: number) => Buffer.from(Array(size + 1).join('ee'), 'hex')
        );

        expect((await randomValues(10)).byteLength).toEqual(10);
    });

    it(
        'should reject the promise when the Node crypto source is unavailable',
        async () => {
            __setByteSource(
                () => { throw new Error('Not on my watch!'); }
            );

            await randomValues(10).then(
                () => { throw new Error('The promise should have been rejected'); },
                () => { /* promise rejected, just as expected */ }
            );
        }
    )
});
