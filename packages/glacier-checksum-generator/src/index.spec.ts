import {toHex} from '@aws/util-hex-encoding';
import {fromUtf8} from '@aws/util-utf8-node';
import {Sha256} from '@aws/crypto-sha256-js';
import {ChecksumGenerator} from './index';

describe('ChecksumGenerator', () => {
    const generator = new ChecksumGenerator(Sha256);

    it('computes linear and tree hashes of bodies < 1 MB', async () => {
        let results = await generator.computeChecksum(
            fromUtf8('bar')
        );
        expect(toHex(results.linearHash)).toEqual(
            'fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9'
        );
        expect(toHex(results.treeHash)).toEqual(
            'fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9'
        );
    });

    it('computes linear and tree hashes of bodies > 1 MB', async () => {
        const payload = new Uint8Array(1024 * 1024 * 5.5);
        payload.fill(0);
        let results = await generator.computeChecksum(
            payload
        );

        expect(toHex(results.linearHash)).toEqual(
            '733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60'
        );
        expect(toHex(results.treeHash)).toEqual(
            'a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455'
        );
    });
});
