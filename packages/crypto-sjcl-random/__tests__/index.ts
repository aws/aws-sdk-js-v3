import * as random from '../';
import {bitLength} from '@aws/crypto-sjcl-bitArray';
import {randomBytes} from 'crypto';

describe('random', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof random.addEntropy).toBe('function');
        expect(typeof random.addEventListener).toBe('function');
        expect(typeof random.getProgress).toBe('function');
        expect(typeof random.isReady).toBe('function');
        expect(typeof random.randomWords).toBe('function');
        expect(typeof random.removeEventListener).toBe('function');
        expect(typeof random.startCollectors).toBe('function');
        expect(typeof random.stopCollectors).toBe('function');
    });

    it('should synchronously provide random words', () => {
        random.addEntropy(randomBytes(256).toString('hex'), 256 * 8, 'openssl');

        expect(random.randomWords(4)).toBeDefined();
        expect(bitLength(random.randomWords(1))).toBe(32);
    });

    describe('startCollectors', () => {
        it(
            'should throw a meaningful error if neither window nor document is defined',
            () => {
                expect(() => random.startCollectors()).toThrow(
                    expect.objectContaining({message: "can't attach event"})
                );
            }
        );
    });

    describe('stopCollectors', () => {
        it(
            'should not throw an error if neither window nor document is defined',
            () => {
                expect(() => random.stopCollectors()).not.toThrow();
            }
        );
    });
});
