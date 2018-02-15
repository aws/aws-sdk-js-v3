import { Crc32 } from '@aws/crc32';

export interface MessageParts {
    headers: DataView;
    body: Uint8Array;
}

export function splitMessage(message: ArrayBufferView): MessageParts {
    if (message.byteLength < 16) {
        throw new Error(
            'Provided message too short to accommodate event stream message overhead'
        );
    }

    const view = new DataView(
        message.buffer,
        message.byteOffset,
        message.byteLength
    );

    const messageLength = view.getUint32(0, false);
    const headerLength = view.getUint32(4, false);
    const expectedPreludeChecksum = view.getUint32(8, false);
    const expectedMessagehecksum = view.getUint32(view.byteLength - 4, false);

    if (view.byteLength !== messageLength) {
        throw new Error(
            'Reported message length does not match received message length'
        );
    }

    const checksummer = (new Crc32).update(
        new Uint8Array(view.buffer, view.byteOffset, 8)
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
        view.buffer,
        view.byteOffset + 8,
        view.byteLength - 12
    ));
    if (expectedMessagehecksum !== checksummer.digest()) {
        throw new Error(
            `The message checksum (${
                checksummer.digest()
            }) did not match the expected value of ${expectedMessagehecksum}`
        )
    }

    return {
        headers: new DataView(
            message.buffer,
            message.byteOffset + 12,
            headerLength
        ),
        body: new Uint8Array(
            message.buffer,
            message.byteOffset + 12 + headerLength,
            messageLength - headerLength - 16
        )
    };
}
