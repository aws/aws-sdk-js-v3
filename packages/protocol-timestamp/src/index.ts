export function iso8601(time: number|string|Date): string {
    return toDate(time).toISOString().replace(/\.\d{3}Z$/, 'Z');
}

export function rfc822(time: number|string|Date): string {
    return toDate(time).toUTCString();
}

export function epoch(time: number|string|Date): number {
    return Math.floor(toDate(time).valueOf() / 1000);
}

export function toDate(time: number|string|Date): Date {
    if (typeof time === 'number') {
        return new Date(time * 1000);
    }

    if (typeof time === 'string') {
        if(Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }

    return time;
}

export function formatTimestamp(time: number|string|Date, format: string): number|string {
    switch (format) {
        case 'iso8601':
            return iso8601(time);
        case 'rfc822':
            return rfc822(time);
        case 'unixTimestamp':
            return epoch(time);
        default:
            throw new Error('Invalid TimestampFormat: ' + format);
    }
}
