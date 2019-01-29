import {_ListOfWriteTreatmentResource} from './_ListOfWriteTreatmentResource';
import {_CampaignHook} from './_CampaignHook';
import {_CampaignLimits} from './_CampaignLimits';
import {_MessageConfiguration} from './_MessageConfiguration';
import {_Schedule} from './_Schedule';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _WriteCampaignRequest: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AdditionalTreatments: {
            shape: _ListOfWriteTreatmentResource,
        },
        Description: {
            shape: {
                type: 'string',
            },
        },
        HoldoutPercent: {
            shape: {
                type: 'integer',
            },
        },
        Hook: {
            shape: _CampaignHook,
        },
        IsPaused: {
            shape: {
                type: 'boolean',
            },
        },
        Limits: {
            shape: _CampaignLimits,
        },
        MessageConfiguration: {
            shape: _MessageConfiguration,
        },
        Name: {
            shape: {
                type: 'string',
            },
        },
        Schedule: {
            shape: _Schedule,
        },
        SegmentId: {
            shape: {
                type: 'string',
            },
        },
        SegmentVersion: {
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