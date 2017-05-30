import * as codecString from '../';

describe('codecString', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof codecString.fromBits).toBe('function');
        expect(typeof codecString.toBits).toBe('function');
    });

    it('should be able to round-trip strings to and from bits', () => {
        const exoticStrings = [
            'The rain in Spain falls mainly on the plain.',
            'Voiçi mon élève, Hervé',
            'دست‌نوشته‌ها نمی‌سوزند',
            'Рукописи не горят'
        ];

        for (let string of exoticStrings) {
            expect(codecString.fromBits(codecString.toBits(string)))
                .toBe(string);
        }
    });
});
