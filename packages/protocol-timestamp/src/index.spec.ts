import {
    epoch,
    iso8601,
    rfc822,
    toDate,
} from "./";

const toIsoString = '2017-05-22T19:33:14.175Z';
const iso8601String = '2017-05-22T19:33:14Z';
const rfc822String = 'Mon, 22 May 2017 19:33:14 GMT';
const epochTs = 1495481594;

describe('iso8601', () => {
    it('should convert date objects to ISO-8601 strings', () => {
        expect(iso8601(new Date(toIsoString))).toBe(iso8601String);
    });

    it('should convert parseable date strings to ISO-8601 strings', () => {
        let date = new Date(toIsoString);

        expect(iso8601(date.toUTCString())).toBe(iso8601String);
        expect(iso8601(date.toISOString())).toBe(iso8601String);
    });

    it(
        'should assume numbers are epoch timestamps and convert them to ISO-8601 strings accordingly',
        () => {
            expect(iso8601(epochTs)).toBe(iso8601String);
        }
    );
});

describe('rfc822', () => {
    it('should convert date objects to RFC 822 strings', () => {
        expect(rfc822(new Date(toIsoString))).toBe(rfc822String);
    });

    it('should convert parseable date strings to RFC 822 strings', () => {
        let date = new Date(toIsoString);

        expect(rfc822(date.toUTCString())).toBe(rfc822String);
        expect(rfc822(date.toISOString())).toBe(rfc822String);
    });

    it(
        'should assume numbers are epoch timestamps and convert them to RFC 822 strings accordingly',
        () => {
            expect(rfc822(epochTs)).toBe(rfc822String);
        }
    );
});

describe('epoch', () => {
    it('should convert date objects to epoch timestamps', () => {
        expect(epoch(new Date(toIsoString))).toBe(epochTs);
    });

    it('should convert parseable date strings to epoch timestamps', () => {
        let date = new Date(toIsoString);

        expect(epoch(date.toUTCString())).toBe(epochTs);
        expect(epoch(date.toISOString())).toBe(epochTs);
    });

    it(
        'should assume numbers are epoch timestamps and convert them to epoch timestamps accordingly',
        () => {
            expect(epoch(epochTs)).toBe(epochTs);
        }
    );
});

describe('toDate', () => {
    it('should convert epoch timestamps to date objects', () => {
        const date = toDate(epochTs);
        expect(date).toBeInstanceOf(Date);
        expect(date.valueOf()).toBe(epochTs * 1000);
    });

    it('should convert ISO-8601 strings to date objects', () => {
        const date = toDate(iso8601String);
        expect(date).toBeInstanceOf(Date);
        expect(date.valueOf()).toBe(epochTs * 1000);
    });

    it('should convert RFC 822 strings to date objects', () => {
        const date = toDate(rfc822String);
        expect(date).toBeInstanceOf(Date);
        expect(date.valueOf()).toBe(epochTs * 1000);
    });
});
