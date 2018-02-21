import { HttpHandler } from './';
import { FetchHttpHandler } from '@aws/fetch-http-handler';

describe('implementation selection', () => {
    it(
        'should use the browser implementation when the http module is not defined',
        () => {
            jest.mock('http', () => {
                throw new Error('http module is not defined');
            });

            const handler = new HttpHandler();
            expect((handler as any).handler).toBeInstanceOf(FetchHttpHandler);
        }
    );

    it(
        'should use the browser implementation when the https module is not defined',
        () => {
            jest.mock('https', () => {
                throw new Error('https module is not defined');
            });

            const handler = new HttpHandler();
            expect((handler as any).handler).toBeInstanceOf(FetchHttpHandler);
        }
    );
});
