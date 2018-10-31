import {_VPC} from './_VPC';
import {Structure as _Structure_} from '@aws-sdk/types';

export const CreateVPCAssociationAuthorizationOutput: _Structure_ = {
    type: 'structure',
    required: [
        'HostedZoneId',
        'VPC',
    ],
    members: {
        HostedZoneId: {
            shape: {
                type: 'string',
            },
        },
        VPC: {
            shape: _VPC,
        },
    },
};