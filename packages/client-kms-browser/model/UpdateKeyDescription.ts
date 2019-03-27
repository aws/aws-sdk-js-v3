import {UpdateKeyDescriptionInput} from './UpdateKeyDescriptionInput';
import {UpdateKeyDescriptionOutput} from './UpdateKeyDescriptionOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateKeyDescription: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateKeyDescription',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateKeyDescriptionInput,
    },
    output: {
        shape: UpdateKeyDescriptionOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};