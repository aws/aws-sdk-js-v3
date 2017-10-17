import {iso8601} from "@aws/protocol-timestamp";
import {isArrayBuffer} from '@aws/is-array-buffer';
import {isIterable} from '@aws/is-iterable';
import {
    BodySerializer,
    Decoder,
    Encoder,
    OperationModel,
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

    public build(operation: OperationModel, input: any): string {
        const inputMember = operation.input;
        if (inputMember.shape.type !== 'structure') {
            throw new Error(
                'The shape rule must be a structure.'
            );
        }
        return this.serializeStructure('', input, inputMember.shape);
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
            if (['undefined', 'null'].indexOf(typeof input) > -1) {
                throw new Error(`expect ${shape.type} type here.`);
            }
            return `${prefix}=${encodeURIComponent(input.toString())}`;
        } else if (shape.type === 'boolean') {
            return `${prefix}=${Boolean(input)}`;
        } else if (shape.type === 'float' || shape.type === 'integer') {
            if (
                typeof input === 'number' ||
                typeof input === 'string' &&
                input.length > 0 && 
                isFinite(Number(input))
            ) {
                return `${prefix}=${input}`;
            } else {
                throw new Error(`expect ${shape.type} type here.`);
            }
        } else {
            throw new Error(
                `cannot parse type ${(shape as any).type}.`
            );
        }
    }

    private serializeStructure(prefix: string, input: any, shape: Structure): string {
        let serialized = [];
        if (typeof input !== 'object' || input === null) {
            throw new Error(
                `Unable to serialize value of type ${typeof input} as a`
                + ' structure'
            );
        }
        for (let key of Object.keys(input)) {
            if (!(key in shape.members)) {
                continue;
            }
            const {
                locationName = key,
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
        const {
            locationName = 'member',
            shape: memberShape
        } = shape.member;
        let listCount = 1;
        for (let listItem of input) {
            let subPrefix = prefix.substring(0, prefix.length);
            if (shape.flattened) {
                if (shape.member.locationName) {
                    let parts = subPrefix.split('.');
                    parts.pop();
                    parts.push(locationName);
                    subPrefix = parts.join('.');
                }
            } else {
                subPrefix += '.' + locationName;
            }
            subPrefix += '.' + listCount;
            serialized.push(this.serialize(subPrefix, listItem, shape.member.shape));
            listCount += 1;
        }
        if (listCount === 1) { //empty list
            return prefix + '=';
        }
        return serialized.join('&');
    }

    private serializeMapEntry(prefix: string, entryCount: number, key: any, value: any, shape: Map): string {
        let serializeEntry = [];
        let subPrefix = prefix + (shape.flattened ? '' : '.entry');
        subPrefix += `.${entryCount}`;
        let keySubPrefix = `${subPrefix}.${shape.key.locationName ? shape.key.locationName : 'key'}`
        let valueSubPrefix = `${subPrefix}.${shape.value.locationName ? shape.value.locationName : 'value'}`;
        serializeEntry.push(this.serialize(keySubPrefix, key, shape.key.shape));
        serializeEntry.push(this.serialize(valueSubPrefix, value, shape.value.shape));
        return serializeEntry.join('&')
    }

    private serializeMap(prefix: string, input: any, shape: Map): string {
        let serialized = [];
        if (isIterable(input)) {
            let entryCount = 1;
            for (let [key, value] of input) {
                serialized.push(this.serializeMapEntry(prefix, entryCount, key, value, shape));
                entryCount += 1;
            }
        } else {
            if (typeof input !== 'object' || input === null) {
                throw new Error(
                    'Unable to serialize value that is neither a [key, value]'
                    + ' iterable nor an object as a map'
                );
            }
            let entryCount = 1;
            for (let key of Object.keys(input)) {
                serialized.push(this.serializeMapEntry(prefix, entryCount, key, input[key], shape));
                entryCount += 1;
            }
        }       
        return serialized.join('&');
    }

    private serializeBlob(prefix: string, input: any, shape: Blob): string {
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

        return `${prefix}=${this.base64Encoder(input)}`;
    }

    private serializeTimestamp(prefix: string, input: any, shape: Timestamp): string {
        if (
            ['number', 'string'].indexOf(typeof input) > -1
            || Object.prototype.toString.call(input) === '[object Date]'
        ) {
            return `${prefix}=${encodeURIComponent(iso8601(input))}`;
        }
        throw new Error(
            'Unable to serialize value that is neither a string nor a'
            + ' number nor a Date object as a timestamp'
        );
    }
}