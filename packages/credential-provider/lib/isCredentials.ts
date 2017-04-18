import {Credentials} from './Credentials';

export function isCredentials(arg: any): arg is Credentials {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.accessKeyId === 'string'
        && typeof arg.secretKey === 'string'
        && ['string', 'undefined'].indexOf(typeof arg.sessionToken) > -1
        && ['number', 'undefined'].indexOf(typeof arg.expiration) > -1;
}
