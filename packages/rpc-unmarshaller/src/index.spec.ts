import {JsonRpcParser} from '../index';
import {OperationModel, HttpResponse} from '@aws/types';
import {extractMetadata} from '@aws/response-metadata-extractor';

const operation: OperationModel = {
    http: {
        method: 'GET',
        requestUri: '/'
    },
    name: 'test',
    metadata: {
        apiVersion: '2017-06-28',
        endpointPrefix: 'foo',
        protocol: 'json',
        serviceFullName: 'AWS Foo Service',
        signatureVersion: 'v4',
        uid: 'foo-2017-06-28',
    },
    input: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    },
    output: {
        shape: {
            type: 'structure',
            required: [],
            members: {},
        }
    },
    errors: [],
};

const response: HttpResponse = {
    statusCode: 200,
    headers: {},
    body: 'a string body'
};
const $metadata = extractMetadata(response);

describe('JsonRpcParser', () => {
    it(
        'should pass the operation output and HTTP response body to the body parser',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => { return {}; })
            };

            const parser = new JsonRpcParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            const parsed = await parser.parse(operation, response);
            expect(parsed).toEqual({$metadata});
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.input,
                'a string body'
            ]);
        }
    );
    it(
        'use an empty string for the body if none is included in the message',
        async () => {
            const bodyParser = {
                parse: jest.fn(() => { return {}; })
            };

            const parser = new JsonRpcParser(
                bodyParser,
                jest.fn(),
                jest.fn(),
            );
            const parsed = await parser.parse(operation, {
                ...response,
                body: void 0
            });
            expect(parsed).toEqual({$metadata});
            expect(bodyParser.parse.mock.calls.length).toBe(1);
            expect(bodyParser.parse.mock.calls[0]).toEqual([
                operation.input,
                ''
            ]);
        }
    );

    it('should UTF-8 encode ArrayBuffer bodies', async () => {
        const bufferBody = new ArrayBuffer(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => 'a string');

        const parser = new JsonRpcParser(
            bodyParser,
            jest.fn(),
            utf8Encoder,
        );

        await parser.parse(operation, {
            ...response,
            body: bufferBody
        });

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody);
        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.input,
            'a string'
        ]);
    });

    it('should UTF-8 encode ArrayBufferView bodies', async () => {
        const bufferBody = new Int32Array(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => 'a string');

        const parser = new JsonRpcParser(
            bodyParser,
            jest.fn(),
            utf8Encoder,
        );

        await parser.parse(operation, {
            ...response,
            body: bufferBody
        });

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(bufferBody.buffer);
        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.input,
            'a string'
        ]);
    });

    it('should collect and UTF-8 encode stream bodies', async () => {
        const streamBody = {chunks: [
            new Uint8Array([0xde, 0xad]),
            new Uint8Array([0xbe, 0xef]),
        ]};
        const collectedStream = new Uint8Array(0);
        const bodyParser = {
            parse: jest.fn(() => { return {}; })
        };
        const utf8Encoder = jest.fn(() => 'a string');
        const streamCollector = jest.fn(() => Promise.resolve(collectedStream));

        const parser = new JsonRpcParser<any>(
            bodyParser,
            streamCollector,
            utf8Encoder,
        );

        await parser.parse(operation, {
            ...response,
            body: streamBody
        });

        expect(streamCollector.mock.calls.length).toBe(1);
        expect(streamCollector.mock.calls[0][0]).toBe(streamBody);

        expect(utf8Encoder.mock.calls.length).toBe(1);
        expect(utf8Encoder.mock.calls[0][0].buffer).toBe(collectedStream.buffer);

        expect(bodyParser.parse.mock.calls.length).toBe(1);
        expect(bodyParser.parse.mock.calls[0]).toEqual([
            operation.input,
            'a string'
        ]);
    });
});
