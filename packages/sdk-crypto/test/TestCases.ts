import {SourceData} from '../CryptoProvider';

type hexEncodedHashResult = string;

interface HashTestCase {
    description: string;
    toHash: SourceData;
    inputEncoding?: string;
    expectedHash: hexEncodedHashResult;
}

export const HASH_TEST_CASES: Array<HashTestCase> = [
    // empty string/buffer/arraybuffer
    {
        description: 'empty string',
        toHash: '',
        expectedHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    },
    {
        description: 'empty ArrayBuffer',
        toHash: new ArrayBuffer(0),
        expectedHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    },
    {
        description: 'empty ArrayBufferView',
        toHash: new Uint8Array(0),
        expectedHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    },
    // short string/buffer/arraybuffer
    {
        description: 'short string',
        toHash: 'foo',
        expectedHash: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
    },
    {
        description: 'short ArrayBuffer',
        toHash: new Uint8Array([102, 111, 111]).buffer,
        expectedHash: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
    },
    {
        description: 'short ArrayBufferView',
        toHash: new Uint8Array([102, 111, 111]),
        expectedHash: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
    },
];

interface HmacTestCase {
    description: string;
    toHash: SourceData;
    secret: SourceData;
    expectedHash: hexEncodedHashResult;
}

export const HMAC_TEST_CASES: Array<HmacTestCase> = [
    {
        description: 'simple string data and "secret" string key',
        toHash: 'foo',
        secret: 'secret',
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple ArrayBuffer data and "secret" string key',
        toHash: new Uint8Array([102, 111, 111]).buffer,
        secret: 'secret',
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple ArrayBufferView data and "secret" string key',
        toHash: new Uint8Array([102, 111, 111]),
        secret: 'secret',
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple string data and "secret" ArrayBuffer key',
        toHash: 'foo',
        secret: new Uint8Array([115, 101, 99, 114, 101, 116]).buffer,
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple ArrayBuffer data and "secret" ArrayBuffer key',
        toHash: new Uint8Array([102, 111, 111]).buffer,
        secret: new Uint8Array([115, 101, 99, 114, 101, 116]).buffer,
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple ArrayBufferView data and "secret" ArrayBuffer key',
        toHash: new Uint8Array([102, 111, 111]),
        secret: new Uint8Array([115, 101, 99, 114, 101, 116]).buffer,
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple string data and "secret" ArrayBufferView key',
        toHash: 'foo',
        secret: new Uint8Array([115, 101, 99, 114, 101, 116]),
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple ArrayBuffer data and "secret" ArrayBufferView key',
        toHash: new Uint8Array([102, 111, 111]).buffer,
        secret: new Uint8Array([115, 101, 99, 114, 101, 116]),
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
    {
        description: 'simple ArrayBufferView data and "secret" ArrayBufferView key',
        toHash: new Uint8Array([102, 111, 111]),
        secret: new Uint8Array([115, 101, 99, 114, 101, 116]),
        expectedHash: '773ba44693c7553d6ee20f61ea5d2757a9a4f4a44d2841ae4e95b52e4cd62db4',
    },
];

export function isNode(): boolean {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}

export function hexEncode(data: Uint8Array): string {
    let out = '';
    for (let i = 0; i < data.byteLength; i++) {
        let encodedByte = data[i].toString(16);
        if (encodedByte.length === 1) {
            encodedByte = `0${encodedByte}`;
        }

        out += encodedByte;
    }

    return out;
}
