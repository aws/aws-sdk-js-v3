import {BodyParser, Decoder, Member, SerializationModel} from "@aws-sdk/types";
import {toDate} from "@aws-sdk/protocol-timestamp";

type Scalar = string|number|boolean|null;

interface Json {
    [index: string]: Scalar|Json|JsonArray;
}

interface JsonArray extends Array<Scalar|Json|JsonArray> {}

type JsonValue = Json|Scalar|JsonArray;

export class JsonParser implements BodyParser {
    constructor(private readonly base64Decoder: Decoder) {}

    public parse<OutputType>(
        shape: Member,
        input: string
    ): OutputType {
        return this.unmarshall(shape.shape, JSON.parse(input));
    }

    private unmarshall(shape: SerializationModel, input: JsonValue): any {
        if (shape.type === 'structure') {
            if (typeof input !== 'object' || input === null) {
                return undefined;
            }

            return Object.keys(shape.members)
                .reduce((output: {[key: string]: any}, memberName: string) => {
                    const {
                        locationName = memberName,
                        shape: memberShape
                    } = shape.members[memberName];
                    const value = (input as Json)[locationName];

                    if (value !== undefined) {
                        output[memberName] = this.unmarshall(memberShape, value);
                    }
                    return output;
                }, {});
        }

        if (shape.type === 'list') {
            if (!Array.isArray(input)) {
                return undefined;
            }

            const {shape: memberShape} = shape.member;
            return input.map(value => this.unmarshall(memberShape, value));
        }

        if (shape.type === 'map') {
            if (typeof input !== 'object' || input === null) {
                return undefined;
            }

            const {shape: valueShape} = shape.value;
            return Object.keys(input)
                .reduce((output: {[key: string]: any}, key: string) => {
                    output[key] = this.unmarshall(
                        valueShape,
                        (input as Json)[key]
                    );
                    return output;
                }, {});
        }

        if (shape.type === 'timestamp') {
            if (typeof input === 'string' || typeof input === 'number') {
                let date = toDate(input);
                if(date.toString() === 'Invalid Date') {
                    return undefined;
                }
                return date;
            }
            return undefined;
        }

        if (shape.type === 'blob') {
            if (typeof input !== 'string') {
                return undefined;
            }

            return this.base64Decoder(input);
        }

        return input;
    }
}
