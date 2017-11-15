import {hashTestVectors} from './knownHashes.fixture';
import {RawSha256} from './RawSha256';

describe('Hash', () => {
    let idx = 0;
    for (const [input, result] of hashTestVectors) {
        it('should match known hash calculations: ' + idx++, () => {
            const hash = new RawSha256;
            hash.update(input);
            expect(hash.digest()).toEqual(result);
        });
    }
});
