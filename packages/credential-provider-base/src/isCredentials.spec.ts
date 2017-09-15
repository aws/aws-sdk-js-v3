import {isCredentials} from "./isCredentials";

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
        expect(isCredentials({
            ...minimalCredentials,
            accessKeyId: 123,
        })).toBe(false);
    });

    it('should reject objects where secretAccessKey is not a string', () => {
        expect(isCredentials({
            ...minimalCredentials,
            secretAccessKey: 123,
        })).toBe(false);
    });

    it('should accept credentials with a sessionToken', () => {
        expect(isCredentials({
            ...minimalCredentials,
            sessionToken: 'baz',
        })).toBe(true);
    });

    it('should reject credentials where sessionToken is not a string', () => {
        expect(isCredentials({
            ...minimalCredentials,
            sessionToken: 123,
        })).toBe(false);
    });

    it('should accept credentials with an expiration', () => {
        expect(isCredentials({
            ...minimalCredentials,
            expiration: 0,
        })).toBe(true);
    });

    it('should reject credentials where expiration is not a number', () => {
        expect(isCredentials({
            ...minimalCredentials,
            expiration: 'quux',
        })).toBe(false);
    });
});
