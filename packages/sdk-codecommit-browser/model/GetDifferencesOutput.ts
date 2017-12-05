import {_DifferenceList} from './_DifferenceList';
import {Structure as _Structure_} from '@aws/types';

export const GetDifferencesOutput: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        differences: {
            shape: _DifferenceList,
        },
        NextToken: {
            shape: {
                type: 'string',
            },
        },
    },
};