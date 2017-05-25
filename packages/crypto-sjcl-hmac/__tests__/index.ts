import Hmac = require('../');

describe('hmac', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof Hmac).toBe('function');
        const hmac = new Hmac([0xdeadbeef, 0xdeadbeef, 0xdeadbeef, 0xdeadbeef]);
        expect(typeof hmac.encrypt).toBe('function');
        expect(typeof hmac.mac).toBe('function');
        expect(typeof hmac.reset).toBe('function');
        expect(typeof hmac.update).toBe('function');
        expect(typeof hmac.digest).toBe('function');
    });
});
