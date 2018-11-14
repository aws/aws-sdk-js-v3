import {_TableNameList} from './_TableNameList';
import {Structure as _Structure_} from '@aws-sdk/types';

export const ListTablesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        TableNames: {
            shape: _TableNameList,
        },
        LastEvaluatedTableName: {
            shape: {
                type: 'string',
                min: 3,
            },
        },
    },
};