import {epoch} from "@aws/protocol-timestamp";
import {
    BodySerializer,
    Decoder,
    Encoder,
    Member,
    SerializationModel
} from "@aws/types";

export class QueryBuilder implements BodySerializer{
    constructor(
        private readonly base64Encoder: Encoder,
        private readonly utf8Decoder: Decoder
    ) {}


    public build(shape: Member, input: any): string {
        return "";
    }

    private serializeStructure(prefix: string, struct: any, shape: SerializationModel) {

    }
}