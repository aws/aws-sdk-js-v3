import { TestVectors } from './vectorTypes.fixture';

export const vectors: TestVectors = {
    empty_message: {
        expectation: 'success',
        encoded: Uint8Array.from([0, 0, 0, 16, 0, 0, 0, 0, 5, 194, 72, 235, 125, 152, 200, 255]),
        decoded: {
            headers: {},
            body: Uint8Array.from([]),
        },
    },
    int32_header: {
        expectation: 'success',
        encoded: Uint8Array.from([0, 0, 0, 43, 0, 0, 0, 14, 52, 139, 236, 123, 8, 101, 118, 101, 110, 116, 45, 105, 100, 4, 0, 0, 160, 12, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 211, 137, 2, 133]),
        decoded: {
            headers: {'event-id': {type: 'integer', value: 0x0000a00c}},
            body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
        },
    },
    payload_no_headers: {
        expectation: 'success',
        encoded: Uint8Array.from([0, 0, 0, 29, 0, 0, 0, 0, 253, 82, 140, 90, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 195, 101, 57, 54]),
        decoded: {
            headers: {},
            body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
        },
    },
    payload_one_str_header: {
        expectation: 'success',
        encoded: Uint8Array.from([0, 0, 0, 61, 0, 0, 0, 32, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0, 16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 141, 156, 8, 177]),
        decoded: {
            headers: {'content-type': {type: 'string', value: 'application/json'}},
            body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
        },
    },
    corrupted_headers: {
        expectation: 'failure',
        encoded: Uint8Array.from([0, 0, 0, 61, 0, 0, 0, 32, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 43, 116, 121, 112, 101, 7, 0, 16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 141, 156, 8, 177]),
    },
    corrupted_header_len: {
        expectation: 'failure',
        encoded: Uint8Array.from([0, 0, 0, 61, 0, 0, 1, 32, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0, 16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 141, 156, 8, 177]),
    },
    corrupted_length: {
        expectation: 'failure',
        encoded: Uint8Array.from([1, 0, 0, 29, 0, 0, 0, 0, 253, 82, 140, 90, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 195, 101, 57, 54]),
    },
    corrupted_payload: {
        expectation: 'failure',
        encoded: Uint8Array.from([0, 0, 0, 29, 0, 0, 0, 0, 253, 82, 140, 90, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 141, 195, 101, 57, 54]),
    },
};
