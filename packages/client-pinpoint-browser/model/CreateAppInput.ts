import {_CreateApplicationRequest} from './_CreateApplicationRequest';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateAppInput: _Structure_ = {
    type: 'structure',
    required: [
        'CreateApplicationRequest',
    ],
    members: {
        CreateApplicationRequest: {
            shape: _CreateApplicationRequest,
        },
    },
    payload: 'CreateApplicationRequest',
};