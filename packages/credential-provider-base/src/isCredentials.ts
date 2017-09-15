import {Credentials} from '@aws/types';

/**
 * Evaluate the provided argument and determine if it represents a static
 * credentials object.
 */
export function isCredentials(arg: any): arg is Credentials {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.accessKeyId === 'string'
        && typeof arg.secretAccessKey === 'string'
        && ['string', 'undefined'].indexOf(typeof arg.sessionToken) > -1
        && ['number', 'undefined'].indexOf(typeof arg.expiration) > -1;
}
