import {StructureMember} from '@aws/types';

export const bodyBlobMember: StructureMember = {
    shape: {type: 'blob'},
    name: 'bodyBlobMember'
};

export const bodyBlobStreamingMember: StructureMember = {
    shape: {
        type: 'blob',
        streaming: true
    },
    name: 'bodyBlobMember'
};

export const bodyBooleanMember: StructureMember = {
    shape: {type: 'boolean'},
    name: 'bodyBooleanMember'
};

export const bodyFloatMember: StructureMember = {
    shape: {type: 'float'},
    name: 'bodyFloatMember'
};

export const bodyIntegerMember: StructureMember = {
    shape: {type: 'integer'},
    name: 'bodyIntegerMember'
};

export const bodyListMember: StructureMember = {
    shape: {
        type: 'list',
        member: {
            shape: {type: 'string'}
        }
    },
    name: 'bodyListMember'
};

export const bodyStringMember: StructureMember = {
    shape: {type: 'string'},
    name: 'bodyStringMember'
};

export const bodyStructureMember: StructureMember = {
    shape: {
        type: 'structure',
        required: [],
        members: {
            data: {
                shape: {type: 'string'},
                name: 'data'
            }
        }
    },
    name: 'bodyStructureMember'
};

export const bodyTimestampMember: StructureMember = {
    shape: {
        type: 'timestamp',
        timestampFormat: 'iso8601'
    },
    name: 'bodyTimestampMember'
};

export const headerJsonMember: StructureMember = {
    shape: {
        type: 'string',
        jsonValue: true
    },
    name: 'HeaderJSON',
    location: 'header',
    locationName: 'x-amz-json'
};

export const headerMapMember: StructureMember = {
    shape: {
        type: 'map',
        key: {shape: {type: 'string'}},
        value: {shape: {type: 'string'}}
    },
    name: 'HeaderMap',
    location: 'headers'
};

export const headerMapCustomLocationMember: StructureMember = {
    shape: {
        type: 'map',
        key: {shape: {type: 'string'}},
        value: {shape: {type: 'string'}}
    },
    name: 'HeaderMap',
    location: 'headers',
    locationName: 'x-amz-map-'
};