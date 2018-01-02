import {
    HashConstructor
} from '@aws/types';

export class ChecksumGenerator {
    constructor(
        private readonly Sha256: HashConstructor
    ) {}

    async computeTreeChecksum(hashes: Uint8Array[]) {
        // merge leaf nodes
        while (hashes.length > 1) {
            const higherLevelHashes: Uint8Array[] = [];
            for (let i = 0; i < hashes.length; i += 2) {
                if (i + 1 < hashes.length) {
                    // concatenate the pair of hashes
                    const chunk = new Uint8Array(
                        hashes[i].byteLength + hashes[i + 1].byteLength
                    );
                    chunk.set(hashes[i]);
                    chunk.set(hashes[i + 1], hashes[i].byteLength);
                    
                    const hash = new this.Sha256();
                    hash.update(chunk);
                    higherLevelHashes.push(await hash.digest());
                } else {
                    // move single hash up a level
                    higherLevelHashes.push(hashes[i]);
                }
            }
            hashes = higherLevelHashes;
        }

        return hashes[0];
    }

    async computeChecksum(payload: Uint8Array) {
        // hashes are generated on 1 MB chunks
        // last chunk can be less than 1 MB
        const MB = 1024 * 1024;

        const hashes: Uint8Array[] = [];

        // generate the leaf nodes
        for (let i = 0; i < payload.byteLength; i += MB) {
            const chunk = payload.subarray(i, Math.min(i + MB, payload.byteLength));
            const hash = new this.Sha256();
            hash.update(chunk);
            hashes.push(await hash.digest());
        }

        const payloadHash = new this.Sha256();
        payloadHash.update(payload);
        return {
            linearHash: await payloadHash.digest(),
            treeHash: await this.computeTreeChecksum(hashes)
        };
    }
}