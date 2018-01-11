import {
    Blob,
    Boolean,
    Float,
    Integer,
    List,
    Map as ProtocolMap,
    randomValues,
    SerializationModel,
    String,
    Structure,
    Timestamp,
} from '@aws/types';
import { toHex } from '@aws/util-hex-encoding';
const { randexp } = require('randexp');

export function createFake(model: SerializationModel): any {
    switch (model.type) {
        case 'blob':
            return createFakeBlob(model);
        case 'boolean':
            return createFakeBoolean(model);
        case 'float':
            return createFakeFloat(model);
        case 'integer':
            return createFakeInteger(model);
        case 'list':
            return createFakeList(model);
        case 'map':
            return createFakeMap(model);
        case 'string':
            return createFakeString(model);
        case 'structure':
            return createFakeStructure(model);
        case 'timestamp':
            return createFakeTimestamp(model);
        default:
            throw new Error(`Invalid model received: ${JSON.stringify(model)}`);
    }
}

function createFakeBlob(model: Blob) {
    const { min = 0 } = model;
    const { max = min + 64 } = model;
    return randomBytes(randomInt(min, max));
}

function createFakeBoolean(model: Boolean) {
    return randomBoolean();
}

function createFakeFloat(model: Float) {
    return randomFloat(model.min, model.max);
}

function createFakeInteger(model: Integer) {
    return randomInt(model.min, model.max);
}

function createFakeList(model: List) {
    const out: Array<any> = [];
    const { min = 0, member } = model;
    const { max = min + 10 } = model;
    const length = randomInt(min, max);
    for (let i = 0; i < length; i++) {
        out.push(createFake(member.shape));
    }

    return out;
}

function createFakeMap(model: ProtocolMap) {
    const out = new Map<any, any>();
    const {min = 0, key, value} = model;
    const { max = min + 10 } = model;
    const length = randomInt(min, max);
    for (let i = 0; i < length; i++) {
        out.set(createFake(key.shape), createFake(value.shape));
    }

    return out;
}

function createFakeString(model: String) {
    const {
        min = 0,
        pattern,
        enum: enumValues,
        jsonValue,
    } = model;
    const { max = min + 25 } = model;

    if (enumValues) {
        return enumValues[randomInt(0, enumValues.length - 1)];
    }

    if (pattern) {
        return randexp(new RegExp(pattern));
    }

    if (jsonValue) {
        return JSON.stringify(createFakeStructure({
            type: 'structure',
            required: [],
            members: {
                foo: { shape: { type: 'string' }},
                bar: { shape: { type: 'string' }},
                fizz: { shape: { type: 'string' }},
                buzz: { shape: { type: 'string' }},
            }
        }));
    }

    return toHex(randomBytes(Math.ceil(randomInt(min, max) / 2)))
        .substr(0, max);
}

function createFakeStructure(model: Structure): object {
    const { required, members } = model;

    const out: {[key: string]: any} = {};
    for (const key of Object.keys(members)) {
        // If a member is not required, it has a 50% chance of being omitted
        if (required.indexOf(key) === -1 && randomBoolean()) {
            continue;
        }

        out[key] = createFake(members[key].shape);
    }

    return out;
}

function createFakeTimestamp(model: Timestamp) {
    return new Date(randomInt(0, Date.now() * 2))
}

function randomBoolean(): boolean {
    return randomFloat(-100, 100) > 0;
}

function randomBytes(length: number): Uint8Array {
    const out = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
        out[i] = randomInt(0, 255);
    }

    return out;
}

function randomFloat(
    min: number = 0,
    max: number = Number.MAX_VALUE
) {
    return (max - min) * Math.random() + min;
}

const maxSafeInteger = 2 ** 53;
function randomInt(
    min: number = 0,
    max: number = maxSafeInteger
) {
    return Math.round(randomFloat(min, max));
}
