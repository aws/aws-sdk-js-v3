import {Member} from '@aws/types';

export const bodyBlobMember: Member = {
    shape: {type: 'blob'},
    name: 'bodyBlobMember'
};

export const bodyBlobStreamingMember: Member = {
    shape: {
        type: 'blob',
        streaming: true
    },
    name: 'bodyBlobMember'
};

export const bodyBooleanMember: Member = {
    shape: {type: 'boolean'},
    name: 'bodyBooleanMember'
};

export const bodyFloatMember: Member = {
    shape: {type: 'float'},
    name: 'bodyFloatMember'
};

export const bodyIntegerMember: Member = {
    shape: {type: 'integer'},
    name: 'bodyIntegerMember'
};

export const bodyListMember: Member = {
    shape: {
        type: 'list',
        member: {
            shape: {type: 'string'}
        }
    },
    name: 'bodyListMember'
};

export const bodyStringMember: Member = {
    shape: {type: 'string'},
    name: 'bodyStringMember'
};

export const bodyStructureMember: Member = {
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

export const bodyTimestampMember: Member = {
    shape: {
        type: 'timestamp',
        timestampFormat: 'iso8601'
    },
    name: 'bodyTimestampMember'
};

export const headerJsonMember: Member = {
    shape: {
        type: 'string',
        jsonValue: true
    },
    name: 'HeaderJSON',
    location: 'header',
    locationName: 'x-amz-json'
};

export const headerMapMember: Member = {
    shape: {
        type: 'map',
        key: {shape: {type: 'string'}},
        value: {shape: {type: 'string'}}
    },
    name: 'HeaderMap',
    location: 'headers'
};

export const headerMapCustomLocationMember: Member = {
    shape: {
        type: 'map',
        key: {shape: {type: 'string'}},
        value: {shape: {type: 'string'}}
    },
    name: 'HeaderMap',
    location: 'headers',
    locationName: 'x-amz-map-'
};