import {_QueryLoggingConfig} from './_QueryLoggingConfig';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateQueryLoggingConfigOutput: _Structure_ = {
    type: 'structure',
    required: [
        'QueryLoggingConfig',
        'Location',
    ],
    members: {
        QueryLoggingConfig: {
            shape: _QueryLoggingConfig,
        },
        Location: {
            shape: {
                type: 'string',
            },
            location: 'header',
            locationName: 'Location',
        },
    },
};