import { HttpHandler } from './';
import { NodeHttpHandler } from '@aws/node-http-handler';

describe('implementation selection', () => {
    it(
        'should use the node implementation when the requisite node modules are defined',
        () => {
            jest.mock('http', () => ({}));
            jest.mock('https', () => ({}));

            const handler = new HttpHandler();
            expect((handler as any).handler).toBeInstanceOf(NodeHttpHandler);
        }
    );
});
