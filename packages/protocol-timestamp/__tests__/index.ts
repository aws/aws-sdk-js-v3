import {
    epoch,
    iso8601,
    rfc822,
} from "../";

const dateString = '2017-05-22T19:33:14.175Z';
const ts = new Date(dateString).valueOf();

describe('iso8601', () => {
    it('should convert date objects to ISO-8601 strings', () => {
        expect(iso8601(new Date(dateString))).toBe('2017-05-22T19:33:14Z');
    });

    it('should convert parseable date strings to ISO-8601 strings', () => {
        let date = new Date(dateString);

        expect(iso8601(date.toUTCString())).toBe('2017-05-22T19:33:14Z');
        expect(iso8601(date.toISOString())).toBe('2017-05-22T19:33:14Z');
    });

    it(
        'should assume numbers are epoch timestamps and convert them to ISO-8601 strings accordingly',
        () => {
            const ts = Math.floor(new Date(dateString).valueOf() / 1000);

            expect(iso8601(ts)).toBe('2017-05-22T19:33:14Z');
        }
    );
});

describe('rfc822', () => {
    it('should convert date objects to RFC 822 strings', () => {
        expect(rfc822(new Date(dateString)))
            .toBe('Mon, 22 May 2017 19:33:14 GMT');
    });

    it('should convert parseable date strings to RFC 822 strings', () => {
        let date = new Date(dateString);

        expect(rfc822(date.toUTCString()))
            .toBe('Mon, 22 May 2017 19:33:14 GMT');
        expect(rfc822(date.toISOString()))
            .toBe('Mon, 22 May 2017 19:33:14 GMT');
    });

    it(
        'should assume numbers are epoch timestamps and convert them to RFC 822 strings accordingly',
        () => {
            const ts = Math.floor(new Date(dateString).valueOf() / 1000);

            expect(rfc822(ts)).toBe('Mon, 22 May 2017 19:33:14 GMT');
        }
    );
});

describe('epoch', () => {
    it('should convert date objects to epoch timestamps', () => {
        expect(epoch(new Date(dateString))).toBe(1495481594);
    });

    it('should convert parseable date strings to epoch timestamps', () => {
        let date = new Date(dateString);

        expect(epoch(date.toUTCString())).toBe(1495481594);
        expect(epoch(date.toISOString())).toBe(1495481594);
    });

    it(
        'should assume numbers are epoch timestamps and convert them to epoch timestamps accordingly',
        () => {
            const ts = Math.floor(new Date(dateString).valueOf() / 1000);

            expect(epoch(ts)).toBe(1495481594);
        }
    );
});
