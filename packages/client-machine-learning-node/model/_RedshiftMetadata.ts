import {_RedshiftDatabase} from './_RedshiftDatabase';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _RedshiftMetadata: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RedshiftDatabase: {
            shape: _RedshiftDatabase,
        },
        DatabaseUserName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        SelectSqlQuery: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
    },
};