import {Provider} from '@aws/types';

export function fromStatic<T>(staticValue: T): Provider<T> {
    const promisified = Promise.resolve(staticValue);
    return () => promisified;
}
