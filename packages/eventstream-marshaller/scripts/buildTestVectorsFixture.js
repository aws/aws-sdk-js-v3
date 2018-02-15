const { Buffer } = require('buffer');
const {
    readdirSync,
    readFileSync,
    writeFileSync,
} = require('fs');
const {
    dirname,
    join,
} = require('path');

const vectorsDir = join(dirname(__dirname), 'test_vectors');
let vectors = '\n';

for (const dirName of ['positive', 'negative']) {
    const encodedVectorsDir = join(vectorsDir, 'encoded', dirName);
    const decodedVectorsDir = join(vectorsDir, 'decoded', dirName);

    for (const vectorName of readdirSync(encodedVectorsDir)) {
        vectors +=
`    ${vectorName}: {
        expectation: '${dirName === 'positive' ? 'success' : 'failure'}',
        encoded: Uint8Array.from([${
            readFileSync(join(encodedVectorsDir, vectorName))
                .map(byte => byte.toString(10))
                .join(', ')
        }]),
`;

        if (dirName === 'positive') {
            const decodedLines = readFileSync(join(decodedVectorsDir, vectorName))
                .toString('utf8')
                .trim()
                .split('\n');
            decodedLines.unshift(); // remove total_length
            decodedLines.unshift(); // remove header_length
            decodedLines.unshift(); // remove prelude_crc32
            decodedLines.pop(); // remove message_crc32

            const bodyBytes = Buffer.from(decodedLines.pop().trim(), 'utf8');

            // FIXME This is an ugly hack, but the test vector format does not provide any metadata about headers
            const headers = vectorName === 'int32_header'
                ? "{'event-id': {type: 'integer', value: 0x0000a00c}}"
                : vectorName === 'payload_one_str_header'
                    ? "{'content-type': {type: 'string', value: 'application/json'}}"
                    : '{}'
            vectors +=
`        decoded: {
            headers: ${headers},
            body: Uint8Array.from([${
                bodyBytes.map(byte => byte.toString(10)).join(', ')
            }]),
        },
`
        }

        vectors += "    },\n"
    }
}

writeFileSync(
    join(dirname(__dirname), 'src', 'TestVectors.fixture.ts'),
`import { TestVectors } from './vectorTypes.fixture';

export const vectors: TestVectors = {${vectors}};
`
);
