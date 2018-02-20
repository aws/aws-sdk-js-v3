import { Crc32 } from '@aws/crc32';

export interface MessageParts {
    headers: DataView;
    body: Uint8Array;
}

export function splitMessage(
    { byteLength, byteOffset, buffer }: ArrayBufferView
): MessageParts {
    if (byteLength < 16) {
        throw new Error(
            'Provided message too short to accommodate event stream message overhead'
        );
    }

    const view = new DataView(buffer, byteOffset, byteLength);

    const messageLength = view.getUint32(0, false);

    if (byteLength !== messageLength) {
        throw new Error(
            'Reported message length does not match received message length'
        );
    }

    const headerLength = view.getUint32(4, false);
    const expectedPreludeChecksum = view.getUint32(8, false);
    const expectedMessageChecksum = view.getUint32(byteLength - 4, false);

    const checksummer = (new Crc32).update(
        new Uint8Array(buffer, byteOffset, 8)
    );
    if (
        expectedPreludeChecksum !== checksummer.digest()
    ) {
        throw new Error(
            `The prelude checksum specified in the message (${
                expectedPreludeChecksum
            }) does not match the calculated CRC32 checksum (${
                checksummer.digest()
            })`
        );
    }

    checksummer.update(new Uint8Array(
        buffer,
        byteOffset + 8,
        byteLength - 12
    ));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(
            `The message checksum (${
                checksummer.digest()
            }) did not match the expected value of ${expectedMessageChecksum}`
        )
    }

    return {
        headers: new DataView(buffer, byteOffset + 12, headerLength),
        body: new Uint8Array(
            buffer,
            byteOffset + 12 + headerLength,
            messageLength - headerLength - 16
        )
    };
}
