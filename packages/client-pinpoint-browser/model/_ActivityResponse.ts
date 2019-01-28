import {Structure as _Structure_} from '@aws-sdk/types';

export const _ActivityResponse: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        ApplicationId: {
            shape: {
                type: 'string',
            },
        },
        CampaignId: {
            shape: {
                type: 'string',
            },
        },
        End: {
            shape: {
                type: 'string',
            },
        },
        Id: {
            shape: {
                type: 'string',
            },
        },
        Result: {
            shape: {
                type: 'string',
            },
        },
        ScheduledStart: {
            shape: {
                type: 'string',
            },
        },
        Start: {
            shape: {
                type: 'string',
            },
        },
        State: {
            shape: {
                type: 'string',
            },
        },
        SuccessfulEndpointCount: {
            shape: {
                type: 'integer',
            },
        },
        TimezonesCompletedCount: {
            shape: {
                type: 'integer',
            },
        },
        TimezonesTotalCount: {
            shape: {
                type: 'integer',
            },
        },
        TotalEndpointCount: {
            shape: {
                type: 'integer',
            },
        },
        TreatmentId: {
            shape: {
                type: 'string',
            },
        },
    },
};