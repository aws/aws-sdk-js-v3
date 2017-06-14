import {Buffer} from 'buffer';
import {get, IncomingMessage, RequestOptions} from 'http';
import {CredentialError} from '@aws/credential-provider-base';

/**
 * @internal
 */
export function httpGet(options: RequestOptions): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const request = get(options);
        request.on('error', err => {
            reject(new CredentialError(
                'Unable to connect to instance metadata service'
            ));
        });

        request.on('response', (res: IncomingMessage) => {
            const {statusCode = 400} = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(new CredentialError(
                    'Error response received from instance metadata service'
                ));
            }

            const chunks: Array<Buffer> = [];
            res.on('readable', () => {
                chunks.push(res.read());
            });
            res.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
        });
    });
}
