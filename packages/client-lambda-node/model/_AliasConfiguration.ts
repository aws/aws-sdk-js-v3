import {_AliasRoutingConfiguration} from './_AliasRoutingConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const _AliasConfiguration: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        AliasArn: {
            shape: {
                type: 'string',
            },
        },
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        FunctionVersion: {
            shape: {
                type: 'string',
                min: 1,
            },
        },
        Description: {
            shape: {
                type: 'string',
            },
        },
        RoutingConfig: {
            shape: _AliasRoutingConfiguration,
        },
        RevisionId: {
            shape: {
                type: 'string',
            },
        },
    },
};