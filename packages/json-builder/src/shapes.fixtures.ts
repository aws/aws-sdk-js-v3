import {
    Blob,
    Boolean,
    Float,
    Integer,
    List,
    Map,
    String,
    Timestamp
} from '@aws-sdk/types';

export const blobShape: Blob = {
    type: 'blob'
};

export const booleanShape: Boolean = {
    type: 'boolean'
};

export const floatShape: Float = {
    type: 'float'
};

export const integerShape: Integer = {
    type: 'integer'
};
export const stringShape: String = {
    type: 'string'
};

export const timestampShape: Timestamp = {
    type: 'timestamp'
};

export const timestampShapeCustom: Timestamp = {
    type: 'timestamp',
    timestampFormat: 'iso8601'
}

export const listOfStringsShape: List = {
    type: 'list',
    member: {
        shape: stringShape,
    }
};

export const mapOfStringsToIntegersShape: Map = {
    type: 'map',
    key: {shape: stringShape},
    value: {
        shape: integerShape,
    }
};