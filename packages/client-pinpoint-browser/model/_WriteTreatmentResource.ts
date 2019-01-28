import {_MessageConfiguration} from './_MessageConfiguration';
import {_Schedule} from './_Schedule';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _WriteTreatmentResource: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        MessageConfiguration: {
            shape: _MessageConfiguration,
        },
        Schedule: {
            shape: _Schedule,
        },
        SizePercent: {
            shape: {
                type: 'integer',
            },
        },
        TreatmentDescription: {
            shape: {
                type: 'string',
            },
        },
        TreatmentName: {
            shape: {
                type: 'string',
            },
        },
    },
};