import {epoch} from "@aws/protocol-timestamp";
import {
    BodySerializer,
    Decoder,
    Encoder,
    Member,
    SerializationModel,
    Structure,
    List,
    Map,
    Blob,
    Timestamp
} from "@aws/types";

export class QueryBuilder implements BodySerializer{
    constructor(
        private readonly base64Encoder: Encoder,
        private readonly utf8Decoder: Decoder
    ) {}


    public build(structure: Member, input: any): string {
        if (structure.shape.type !== 'structure') {
            throw new Error(
                'The shape rule must be a structure.'
            );
        }
        return this.serializeStructure('', input, structure.shape);
    }

    private serialize(prefix: string, input: any, shape: SerializationModel): string {
        if (shape.type === 'structure') {
            return this.serializeStructure(prefix, input, shape);
        } else if (shape.type === 'list') {
            return this.serializeList(prefix, input, shape);
        } else if (shape.type === 'map') {
            return this.serializeMap(prefix, input, shape);
        } else if (shape.type === 'blob') {
            return this.serializeBlob(prefix, input, shape);
        } else if (shape.type === 'timestamp') {
            return this.serializeTimestamp(prefix, input, shape);
        } else if (shape.type === 'string') {
            return `${prefix}=${input as string}`;
        } else if (shape.type === 'boolean') {
            return `${prefix}=${input as string}`;
        } else {//number
            return `${prefix}=${input as string}`;
        } 
    }

    private serializeStructure(prefix: string, input: any, shape: Structure): string {
        let serialized = [];
        const inputType = typeof input;
        if (inputType !== 'object' || input === null) {
            throw new Error(
                `Unable to serialize value of type ${typeof input} as a`
                + ' structure'
            );
        }
        for (let key of Object.keys(input)) {
            if (
                input[key] === undefined ||
                input[key] === null ||
                !(key in shape.members)
            ) {
                continue;
            }
            const {locationName = key,
                    shape: memberShape
            } = shape.members[key];
            const subPrefix = prefix.length !== 0 ? prefix + '.' + locationName : locationName;
            serialized.push(this.serialize(subPrefix, input[key], shape.members[key].shape));
        }
        return serialized.join('&');
    }

    private serializeList(prefix: string, input: any, shape: List): string {
        let serialized = [];
        if (!Array.isArray(input) && !isIterable(input)) {
            throw new Error(
                'Unable to serialize value that is neither an array nor an'
                + ' iterable as a list'
            );
        }
        const {locationName = 'member',
                shape: memberShape
        } = shape.member;
        let listCount = 1;
        for (let listItem of input) {
            if (shape.flattened) {
                if (shape.member.locationName) {
                    let parts = prefix.split('.');
                    parts.pop();
                    parts.push(locationName);
                    prefix = parts.join('.');
                }
            } else {
                prefix += '.' + locationName;
            }
            prefix += '.' + listCount;
            serialized.push(this.serialize(prefix, listItem, shape.member.shape));
            listCount += 1;
        }
        return serialized.join('&');
    }

    private serializeMap(prefix: string, input: any, shape: Map): string {
        let serialized = [];
        if (typeof input !== 'object' || input === null) {
            throw new Error(
                'Unable to serialize value that is neither a [key, value]'
                + ' iterable nor an object as a map'
            );
        }
        let entryCount = 1;
        for (let key of Object.keys(input)) {
            let subPrefix = prefix + (shape.flattened ? '' : '.entry');
            subPrefix += '.' + entryCount;
            let keySubPrefix = subPrefix + '.' 
                        + shape.key.locationName ? shape.key.locationName : 'key';
            let valueSubPrefix = subPrefix + '.' 
                        + shape.value.locationName ? shape.value.locationName : 'value';
            if (typeof keySubPrefix === 'undefined' || typeof valueSubPrefix === 'undefined') {
                throw new Error('undefined map key or value name');//make tscompiler happy
            }
            serialized.push(this.serialize(keySubPrefix, key, shape.key.shape));
            serialized.push(this.serialize(valueSubPrefix, input[key], shape.value.shape));
            entryCount += 1;
        }
        return serialized.join('&');
    }

    private serializeBlob(prefix: string, input: any, shape: Blob): string {
        return '';
    }

    private serializeTimestamp(prefix: string, input: any, shape: Timestamp): string {
        return '';
    }
}

function isIterable(arg: any): arg is Iterable<any> {
    return Boolean(arg)
        && typeof Symbol !== 'undefined'
        && typeof arg[Symbol.iterator] === 'function';
}