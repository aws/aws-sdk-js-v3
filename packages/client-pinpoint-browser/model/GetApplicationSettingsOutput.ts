import {_ApplicationSettingsResource} from './_ApplicationSettingsResource';
import {Structure as _Structure_} from '@aws-sdk/types';

export const GetApplicationSettingsOutput: _Structure_ = {
    type: 'structure',
    required: [
        'ApplicationSettingsResource',
    ],
    members: {
        ApplicationSettingsResource: {
            shape: _ApplicationSettingsResource,
        },
    },
    payload: 'ApplicationSettingsResource',
};