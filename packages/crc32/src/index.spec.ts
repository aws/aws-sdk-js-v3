import { Crc32 } from './index';
import { fromUtf8 } from '@aws-sdk/util-utf8-universal';

type TestVector = [Uint8Array, number];

const emptyVector: TestVector = [new Uint8Array(0), 0];

const phraseVector: TestVector = [
    fromUtf8('The quick brown fox jumps over the lazy dog'),
    0x414fa339
];

const incrementalVectors: Array<TestVector> = [
    [fromUtf8('The '), 746075],
    [fromUtf8('quick '), 2750157876],
    [fromUtf8('brown '), 3357223548],
    [fromUtf8('fox '), 2293265890],
    [fromUtf8('jumps '), 330596039],
    [fromUtf8('over '), 2281844364],
    [fromUtf8('the '), 3828401820],
    [fromUtf8('lazy '), 3693501045],
    [fromUtf8('dog'), 0x414fa339],
]

const testVectors = new Map<Uint8Array, number>([
    emptyVector,
    phraseVector,
]);

describe('Crc32', () => {
    for (const [buffer, expected] of testVectors) {
        it(
            `should derive a Crc32 of ${expected} for an input of ${buffer.toString()}`,
            () => {

                expect((new Crc32).update(buffer).digest()).toBe(expected);
            }
        );
    }

    it('should allow incremental digest calculation', () => {
        const instance = new Crc32;
        expect(instance.digest()).toBe(0);

        for (const [data, expectedCrc32] of incrementalVectors) {
            expect(instance.update(data).digest()).toBe(expectedCrc32);
        }
    })
});
