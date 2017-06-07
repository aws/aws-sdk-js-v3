import {
    Decoder,
    Encoder,
    SerializationModel,
} from "@aws/types";
import {epoch} from "@aws/protocol-timestamp";

type Scalar = string|number|boolean|null;

interface Json {
    [x: string]: Scalar|Json|JsonArray;
}

interface JsonArray extends Array<Scalar|Json|JsonArray> {}

type JsonValue = Scalar|Json|JsonArray;

export class JsonBody {
    constructor(
        private readonly base64Encoder: Encoder,
        private readonly utf8Decoder: Decoder
    ) {}

    public build(shape: SerializationModel, input: object): string {
        return JSON.stringify(this.format(shape, input));
    }

    private format(shape: SerializationModel, input: any): JsonValue {
        if (shape.type === 'structure') {
            const data: Json = {};
            // The validator should have ensured that this input is an object
            for (let key of Object.keys(input)) {
                if (
                    input[key] === undefined ||
                    input[key] === null ||
                    !(key in shape.members)
                ) {
                    continue;
                }

                const {locationName = key} = shape.members[key];
                data[locationName] = this.format(
                    shape.members[key].shape,
                    input[key]
                );
            }

            return data;
        } else if (shape.type === 'list') {
            const data: JsonArray = [];
            // The validator should have ensured that this input is an iterable
            for (let element of input) {
                data.push(this.format(shape.member.shape, element));
            }

            return data;
        } else if (shape.type === 'map') {
            const data: Json = {};
            // The validator should have ensured that this input is a
            // [key, value] iterable...
            if (typeof input[Symbol.iterator] === 'function') {
                for (let [key, value] of input) {
                    data[key] = this.format(shape.value.shape, value);
                }
                return data;
            }

            // ... or an object
            for (let key of Object.keys(input)) {
                data[key] = this.format(shape.value.shape, input[key]);
            }
            return data;
        } else if (shape.type === 'blob') {
            // The validator should have ensured this is an ArrayBuffer,
            // ArrayBufferView, or string
            if (typeof input === 'string') {
                input = this.utf8Decoder(input);
            } else if (ArrayBuffer.isView(input)) {
                input = new Uint8Array(input.buffer);
            } else {
                input = new Uint8Array(input);
            }

            return this.base64Encoder(input);
        } else if (shape.type === 'timestamp') {
            // The validator should have ensured this is a date, number, or
            // string
            return epoch(input);
        }

        return input;
    }
}
