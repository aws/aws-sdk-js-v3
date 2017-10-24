import {
    Blob,
    Boolean,
    Float,
    Integer,
    List,
    Map,
    String,
    Timestamp
} from '@aws/types';

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

export const listOfStringsShape: List = {
    type: 'list',
    member: {
        shape: stringShape,
    }
};

export const listOfStringsFlattenedShape: List = {
    type: 'list',
    flattened: true,
    member: {
        shape: stringShape,
    }
};

export const listOfStringsWithLocationNameShape: List = {
    type: 'list',
    member: {
        shape: stringShape,
        locationName: 'item'
    }
};

export const listOfStringsWithLocationNameFlattenedShape: List = {
    type: 'list',
    flattened: true,
    member: {
        shape: stringShape,
        locationName: 'item'
    }
};

export const mapOfStringsToIntegersShape: Map = {
    type: 'map',
    key: {shape: stringShape},
    value: {
        shape: integerShape,
    }
};

export const mapOfStringsToIntegersFlattenedShape: Map = {
    type: 'map',
    key: {shape: stringShape},
    value: {
        shape: integerShape,
    },
    flattened: true
};

export const mapOfStringsToIntegersWithLocationNameShape: Map = {
    type: 'map',
    key: {
        shape: stringShape,
        locationName: 'theKey'
    },
    value: {
        shape: integerShape,
        locationName: 'theValue'
    }
};