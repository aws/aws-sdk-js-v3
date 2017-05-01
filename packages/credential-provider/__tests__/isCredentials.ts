import {isCredentials} from "../lib/isCredentials";

describe('isCredentials', () => {
    const minimalCredentials = {accessKeyId: 'foo', secretAccessKey: 'bar'};

    it('should reject scalar values', () => {
        for (let scalar of ['foo', 12, 1.2, true, null, undefined]) {
            expect(isCredentials(scalar)).toBe(false);
        }
    });

    it('should accept an object with an accessKeyId and secretAccessKey', () => {
        expect(isCredentials(minimalCredentials)).toBe(true);
    });

    it('should reject objects where accessKeyId is not a string', () => {
        expect(isCredentials(
            Object.assign({}, minimalCredentials, {accessKeyId: 123})
        )).toBe(false);
    });

    it('should reject objects where secretAccessKey is not a string', () => {
        expect(isCredentials(
            Object.assign({}, minimalCredentials, {secretAccessKey: 123})
        )).toBe(false);
    });

    it('should accept credentials with a sessionToken', () => {
        expect(isCredentials(
            Object.assign({sessionToken: 'baz'}, minimalCredentials)
        )).toBe(true);
    });

    it('should reject credentials where sessionToken is not a string', () => {
        expect(isCredentials(
            Object.assign({sessionToken: 123}, minimalCredentials)
        )).toBe(false);
    });

    it('should accept credentials with an expiration', () => {
        expect(isCredentials(
            Object.assign({expiration: 0}, minimalCredentials)
        )).toBe(true);
    });

    it('should reject credentials where expiration is not a number', () => {
        expect(isCredentials(
            Object.assign({expiration: 'quux'}, minimalCredentials)
        )).toBe(false);
    });
});
