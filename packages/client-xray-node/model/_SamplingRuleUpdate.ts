import {_AttributeMap} from './_AttributeMap';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _SamplingRuleUpdate: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        RuleName: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        RuleARN: {
            shape: {
                type: 'string',
            },
        },
        ResourceARN: {
            shape: {
                type: 'string',
            },
        },
        Priority: {
            shape: {
                type: 'integer',
            },
        },
        FixedRate: {
            shape: {
                type: 'float',
            },
        },
        ReservoirSize: {
            shape: {
                type: 'integer',
            },
        },
        Host: {
            shape: {
                type: 'string',
            },
        },
        ServiceName: {
            shape: {
                type: 'string',
            },
        },
        ServiceType: {
            shape: {
                type: 'string',
            },
        },
        HTTPMethod: {
            shape: {
                type: 'string',
            },
        },
        URLPath: {
            shape: {
                type: 'string',
            },
        },
        Attributes: {
            shape: _AttributeMap,
        },
    },
};