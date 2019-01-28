import {_ImportJobResponse} from './_ImportJobResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateImportJobOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ImportJobResponse',
    ],
    members: {
        ImportJobResponse: {
            shape: _ImportJobResponse,
        },
    },
    payload: 'ImportJobResponse',
};