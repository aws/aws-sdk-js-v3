import Aes = require('../');

describe('aes', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof Aes).toBe('function');
        const aes = new Aes([0xdeadbeef, 0xdeadbeef, 0xdeadbeef, 0xdeadbeef]);
        expect(typeof aes.encrypt).toBe('function');
        expect(typeof aes.decrypt).toBe('function');
    });
});
