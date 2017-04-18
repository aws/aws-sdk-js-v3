export interface Credentials {
    readonly accessKeyId: string;
    readonly secretKey: string;
    readonly sessionToken?: string;
    readonly expiration?: number;
}

// TODO remove this file when the types package is merged to master
