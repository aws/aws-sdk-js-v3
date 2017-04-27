import {Buffer} from 'buffer';
import {get, IncomingMessage, RequestOptions} from 'http';

export function httpGet(options: RequestOptions): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const request = get(options);
        request.on('error', reject);
        request.on('response', (res: IncomingMessage) => {
            const {statusCode = 400} = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(new Error(
                    'Unable to connect to instance metadata service'
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
