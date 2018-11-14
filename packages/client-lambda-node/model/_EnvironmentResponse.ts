import {_EnvironmentVariables} from './_EnvironmentVariables';
import {_EnvironmentError} from './_EnvironmentError';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _EnvironmentResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        Variables: {
            shape: _EnvironmentVariables,
        },
        Error: {
            shape: _EnvironmentError,
        },
    },
};