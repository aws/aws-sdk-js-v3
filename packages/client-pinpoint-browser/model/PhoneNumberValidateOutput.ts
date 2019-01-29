import {_NumberValidateResponse} from './_NumberValidateResponse';
import {Structure as _Structure_} from '@aws-sdk/types';

export const PhoneNumberValidateOutput: _Structure_ = {
    type: 'structure',
    required: [
        'NumberValidateResponse',
    ],
    members: {
        NumberValidateResponse: {
            shape: _NumberValidateResponse,
        },
    },
    payload: 'NumberValidateResponse',
};