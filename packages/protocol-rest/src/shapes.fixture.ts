import {NamedMember} from '@aws/types';

export const bodyBlobMember: NamedMember = {
    shape: {type: 'blob'},
    name: 'bodyBlobMember'
};

export const bodyBlobStreamingMember: NamedMember = {
    shape: {
        type: 'blob',
        streaming: true
    },
    name: 'bodyBlobMember'
};

export const bodyBooleanMember: NamedMember = {
    shape: {type: 'boolean'},
    name: 'bodyBooleanMember'
};

export const bodyFloatMember: NamedMember = {
    shape: {type: 'float'},
    name: 'bodyFloatMember'
};

export const bodyIntegerMember: NamedMember = {
    shape: {type: 'integer'},
    name: 'bodyIntegerMember'
};

export const bodyListMember: NamedMember = {
    shape: {
        type: 'list',
        member: {
            shape: {type: 'string'},
            name: 'member'
        }
    },
    name: 'bodyListMember'
};

export const bodyStringMember: NamedMember = {
    shape: {type: 'string'},
    name: 'bodyStringMember'
};

export const bodyStructureMember: NamedMember = {
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

export const bodyTimestampMember: NamedMember = {
    shape: {
        type: 'timestamp',
        timestampFormat: 'iso8601'
    },
    name: 'bodyTimestampMember'
};

export const headerJsonMember: NamedMember = {
    shape: {
        type: 'string',
        jsonValue: true
    },
    name: 'HeaderJSON',
    location: 'header',
    locationName: 'x-amz-json'
};

export const headerMapMember: NamedMember = {
    shape: {
        type: 'map',
        key: {shape: {type: 'string'}},
        value: {
            shape: {type: 'string'},
            name: 'value'
        }
    },
    name: 'HeaderMap',
    location: 'headers'
};

export const headerMapCustomLocationMember: NamedMember = {
    shape: {
        type: 'map',
        key: {shape: {type: 'string'}},
        value: {
            shape: {type: 'string'},
            name: 'value'
        }
    },
    name: 'HeaderMap',
    location: 'headers',
    locationName: 'x-amz-map-'
};