import {_AliasRoutingConfiguration} from './_AliasRoutingConfiguration';
import {Structure as _Structure_} from '@aws-sdk/types';

export const UpdateAliasInput: _Structure_ = {
    type: 'structure',
    required: [
        'FunctionName',
        'Name',
    ],
    members: {
        FunctionName: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'FunctionName',
        },
        Name: {
            shape: {
                type: 'string',
                min: 1,
            },
            location: 'uri',
            locationName: 'Name',
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