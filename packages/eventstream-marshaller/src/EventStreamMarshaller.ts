import { HeaderMarshaller } from './HeaderMarshaller';
import { Message, MessageHeaders, MessageHeaderValue } from './Message';
import { splitMessage } from './splitMessage';
import { Crc32 } from '@aws/crc32';
import { Decoder, Encoder } from '@aws/types';
import { toHex } from '@aws/util-hex-encoding';

export class EventStreamMarshaller {
    private readonly headerMarshaller: HeaderMarshaller;

    constructor(toUtf8: Encoder, fromUtf8: Decoder) {
        this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
    }

    marshall({ headers: rawHeaders, body }: Message): Uint8Array {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;

        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new Crc32;

        // Format message
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);

        // Write trailing message checksum
        view.setUint32(
            length - 4,
            checksum.update(out.subarray(8, length - 4)).digest(),
            false
        );

        return out;
    }

    unmarshall(message: ArrayBufferView): Message {
        const { headers, body } = splitMessage(message);

        return { headers: this.headerMarshaller.parse(headers), body };
    }
}
