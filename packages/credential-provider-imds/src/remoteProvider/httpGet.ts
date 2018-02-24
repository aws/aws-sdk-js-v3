import { ProviderError } from '@aws/property-provider';
import { IncomingMessage, RequestOptions } from 'http';
const { Buffer } = require('buffer');
const { get } = require('http');

/**
 * @internal
 */
export function httpGet(options: RequestOptions|string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const request = get(options);
        request.on('error', (err: any) => {
            reject(new ProviderError(
                'Unable to connect to instance metadata service'
            ));
        });

        request.on('response', (res: IncomingMessage) => {
            const {statusCode = 400} = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(new ProviderError(
                    'Error response received from instance metadata service'
                ));
            }

            const chunks: Array<Buffer> = [];
            res.on('data', chunk => {
                chunks.push(chunk as Buffer);
            });
            res.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
        });
    });
}
