import {Md5} from './';

describe('Md5', () => {
    it('should proxy method calls to underlying implementation', () => {
        const md5 = new Md5();
        const hashMock = {
            update: jest.fn(),
            digest: jest.fn(),
        };
        (md5 as any).hash = hashMock;

        md5.update('foo', 'utf8');
        expect(hashMock.update.mock.calls.length).toBe(1);
        expect(hashMock.update.mock.calls[0]).toEqual(['foo', 'utf8']);

        md5.digest();
        expect(hashMock.digest.mock.calls.length).toBe(1);
    });
});
