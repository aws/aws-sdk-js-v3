import {isArrayBuffer} from '@aws/is-array-buffer';
import {epoch} from "@aws/protocol-timestamp";
import {isIterable} from "@aws/is-iterable";
import {
    BodySerializer,
    Decoder,
    Encoder,
    OperationModel,
    SerializationModel
} from "@aws/types";

type Scalar = string|number|boolean|null;

interface Json {
    [index: string]: Scalar|Json|JsonArray;
}

interface JsonArray extends Array<Scalar|Json|JsonArray> {}

type JsonValue = Json|Scalar|JsonArray;

export class JsonBuilder implements BodySerializer {
    constructor(
        private readonly base64Encoder: Encoder,
        private readonly utf8Decoder: Decoder
    ) {}

    public build(operation: OperationModel, input: any): string {
        const shape = operation.input.shape;
        return JSON.stringify(this.format(shape, input));
    }

    private format(shape: SerializationModel, input: any): JsonValue {
        const inputType = typeof input;
        if (shape.type === 'structure') {
            if (inputType !== 'object' || input === null) {
                throw new Error(
                    `Unable to serialize value of type ${typeof input} as a`
                    + ' structure'
                );
            }

            const data: Json = {};
            for (let key of Object.keys(input)) {
                if (
                    input[key] === undefined ||
                    input[key] === null ||
                    !(key in shape.members)
                ) {
                    continue;
                }

                const {
                    locationName = key,
                    shape: memberShape
                } = shape.members[key];
                data[locationName] = this.format(memberShape, input[key]);
            }

            return data;
        } else if (shape.type === 'list') {
            if (Array.isArray(input) || isIterable(input)) {
                const data: JsonArray = [];
                for (let element of input) {
                    data.push(this.format(shape.member.shape, element));
                }

                return data;
            }

            throw new Error(
                'Unable to serialize value that is neither an array nor an'
                + ' iterable as a list'
            );
        } else if (shape.type === 'map') {
            const data: Json = {};
            // A map input is should be a [key, value] iterable...
            if (isIterable(input)) {
                for (let [key, value] of input) {
                    data[key] = this.format(shape.value.shape, value);
                }
                return data;
            }

            // ... or an object
            if (inputType !== 'object' || input === null) {
                throw new Error(
                    'Unable to serialize value that is neither a [key, value]'
                    + ' iterable nor an object as a map'
                );
            }

            for (let key of Object.keys(input)) {
                data[key] = this.format(shape.value.shape, input[key]);
            }
            return data;
        } else if (shape.type === 'blob') {
            if (typeof input === 'string') {
                input = this.utf8Decoder(input);
            } else if (ArrayBuffer.isView(input)) {
                input = new Uint8Array(
                    input.buffer,
                    input.byteOffset,
                    input.byteLength
                );
            } else if (isArrayBuffer(input)) {
                input = new Uint8Array(input);
            } else {
                throw new Error(
                    'Unable to serialize value that is neither a string nor an'
                    + ' ArrayBuffer nor an ArrayBufferView as a blob'
                );
            }

            return this.base64Encoder(input);
        } else if (shape.type === 'timestamp') {
            if (
                ['number', 'string'].indexOf(typeof input) > -1
                || Object.prototype.toString.call(input) === '[object Date]'
            ) {
                return epoch(input);
            }

            throw new Error(
                'Unable to serialize value that is neither a string nor a'
                + ' number nor a Date object as a timestamp'
            );
        }

        return input;
    }
}
