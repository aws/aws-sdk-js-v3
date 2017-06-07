export function iso8601(time: number|string|Date): string {
    return toDate(time).toISOString().replace(/\.\d{3}Z$/, 'Z');
}

export function rfc822(time: number|string|Date): string {
    return toDate(time).toUTCString();
}

export function epoch(time: number|string|Date): number {
    return Math.floor(toDate(time).valueOf() / 1000);
}

function toDate(time: number|string|Date): Date {
    if (typeof time === 'number') {
        return new Date(time * 1000);
    }

    if (typeof time === 'string') {
        return new Date(time);
    }

    return time;
}
