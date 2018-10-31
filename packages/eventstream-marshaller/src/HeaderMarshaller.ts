import { MessageHeaders, MessageHeaderValue } from './Message';
import { Decoder, Encoder } from '@aws-sdk/types';
import { fromHex, toHex } from '@aws-sdk/util-hex-encoding';
import { Int64 } from './Int64';

/**
 * @internal
 */
export class HeaderMarshaller {
    constructor(
        private readonly toUtf8: Encoder,
        private readonly fromUtf8: Decoder
    ) {}

    format(headers: MessageHeaders): Uint8Array {
        const chunks: Array<Uint8Array> = [];

        for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(
                Uint8Array.from([bytes.byteLength]),
                bytes,
                this.formatHeaderValue(headers[headerName])
            );
        }

        const out = new Uint8Array(
            chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0)
        );
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }

        return out;
    }

    private formatHeaderValue(header: MessageHeaderValue): Uint8Array {
        switch (header.type) {
            case 'boolean':
                return Uint8Array.from([
                    header.value
                        ? HEADER_VALUE_TYPE.boolTrue
                        : HEADER_VALUE_TYPE.boolFalse,
                ]);
            case 'byte':
                return Uint8Array.from([
                    HEADER_VALUE_TYPE.byte,
                    header.value,
                ]);
            case 'short':
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, HEADER_VALUE_TYPE.short);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case 'integer':
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, HEADER_VALUE_TYPE.integer);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case 'long':
                const longBytes = new Uint8Array(9);
                longBytes[0] = HEADER_VALUE_TYPE.long;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case 'binary':
                const binView = new DataView(
                    new ArrayBuffer(3 + header.value.byteLength)
                );
                binView.setUint8(0, HEADER_VALUE_TYPE.byteArray);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case 'string':
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(
                    new ArrayBuffer(3 + utf8Bytes.byteLength)
                );
                strView.setUint8(0, HEADER_VALUE_TYPE.string);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case 'timestamp':
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = HEADER_VALUE_TYPE.timestamp;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case 'uuid':
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }

                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = HEADER_VALUE_TYPE.uuid;
                uuidBytes.set(fromHex(header.value.replace(/\-/g, '')), 1);
                return uuidBytes;
        }
    }

    parse(headers: DataView): MessageHeaders {
        const out: MessageHeaders = {};
        let position = 0;

        while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(
                headers.buffer,
                headers.byteOffset + position,
                nameLength
            ));
            position += nameLength;

            switch (headers.getUint8(position++)) {
                case HEADER_VALUE_TYPE.boolTrue:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case HEADER_VALUE_TYPE.boolFalse:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case HEADER_VALUE_TYPE.byte:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case HEADER_VALUE_TYPE.short:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case HEADER_VALUE_TYPE.integer:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case HEADER_VALUE_TYPE.long:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64(new Uint8Array(
                            headers.buffer,
                            headers.byteOffset + position,
                            8
                        ))
                    };
                    position += 8;
                    break;
                case HEADER_VALUE_TYPE.byteArray:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(
                            headers.buffer,
                            headers.byteOffset + position,
                            binaryLength
                        ),
                    };
                    position += binaryLength;
                    break;
                case HEADER_VALUE_TYPE.string:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(
                            headers.buffer,
                            headers.byteOffset + position,
                            stringLength
                        )),
                    };
                    position += stringLength;
                    break;
                case HEADER_VALUE_TYPE.timestamp:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64(new Uint8Array(
                            headers.buffer,
                            headers.byteOffset + position,
                            8
                        )).valueOf()),
                    };
                    position += 8;
                    break;
                case HEADER_VALUE_TYPE.uuid:
                    const uuidBytes = new Uint8Array(
                        headers.buffer,
                        headers.byteOffset + position,
                        16
                    );
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${
                            toHex(uuidBytes.subarray(0, 4))
                        }-${
                            toHex(uuidBytes.subarray(4, 6))
                        }-${
                            toHex(uuidBytes.subarray(6, 8))
                        }-${
                            toHex(uuidBytes.subarray(8, 10))
                        }-${
                            toHex(uuidBytes.subarray(10))
                        }`,
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }

        return out;
    }
}

const enum HEADER_VALUE_TYPE {
    boolTrue = 0,
    boolFalse,
    byte,
    short,
    integer,
    long,
    byteArray,
    string,
    timestamp,
    uuid,
};

const BOOLEAN_TAG = 'boolean';
const BYTE_TAG = 'byte';
const SHORT_TAG = 'short';
const INT_TAG = 'integer';
const LONG_TAG = 'long';
const BINARY_TAG = 'binary';
const STRING_TAG = 'string';
const TIMESTAMP_TAG = 'timestamp';
const UUID_TAG = 'uuid';

const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
