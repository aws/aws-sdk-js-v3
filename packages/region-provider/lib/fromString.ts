import {Provider} from '@aws/types';

export function fromString(region: string): Provider<string> {
    const promisified = Promise.resolve(region);
    return () => promisified;
}
