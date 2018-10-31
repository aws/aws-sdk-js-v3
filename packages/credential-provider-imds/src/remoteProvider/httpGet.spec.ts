import {createServer} from 'http';
import {httpGet} from "./httpGet";
import {ProviderError} from '@aws-sdk/property-provider';

let matchers: {[url: string]: string} = {};

function addMatcher(url: string, toReturn: string): void {
    matchers[url] = toReturn;
}

function clearMatchers(): void {
    matchers = {};
}

function getOpenPort(candidatePort: number = 4321): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        const server = createServer();
        server.on('error', () => reject());
        server.listen(candidatePort);
        server.close(() => resolve(candidatePort));
    })
        .catch(() => getOpenPort(candidatePort + 1));
}

let port: number;

const server = createServer((request, response) => {
    const {url = ''} = request;
    if (url in matchers) {
        response.statusCode = 200;
        response.end(matchers[url]);
    } else {
        response.statusCode = 404;
        response.end('Not found');
    }
});

beforeAll(async (done) => {
    port = await getOpenPort();
    server.listen(port);
    done();
});

afterAll(() => {
    server.close();
});

beforeEach(clearMatchers);

describe('httpGet', () => {
    it('should respond with a promise fulfilled with the http response', async () => {
        const expectedResponse = 'foo bar baz';
        addMatcher('/', expectedResponse);

        expect((await httpGet(`http://localhost:${port}/`)).toString('utf8'))
            .toEqual(expectedResponse);
    });

    it(
        'should reject the promise with a non-terminal error if a 404 status code is received',
        async () => {
            addMatcher('/fizz', 'buzz');

            await httpGet(`http://localhost:${port}/foo`).then(
                () => {
                    throw new Error('The promise should have been rejected');
                },
                (err: any) => {
                    expect((err as ProviderError).tryNextLink).toBe(true);
                }
            );
        }
    );

    it(
        'should reject the promise with a non-terminal error if the remote server cannot be contacted',
        async () => {
            server.close();

            await httpGet(`http://localhost:${port}/foo`).then(
                () => {
                    throw new Error('The promise should have been rejected');
                },
                (err: any) => {
                    expect((err as ProviderError).tryNextLink).toBe(true);
                }
            );
        }
    );
});


