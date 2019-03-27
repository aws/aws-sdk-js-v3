import {UntagResourceInput} from './UntagResourceInput';
import {UntagResourceOutput} from './UntagResourceOutput';
import {KMSInternalException} from './KMSInternalException';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {TagException} from './TagException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UntagResource: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UntagResource',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UntagResourceInput,
    },
    output: {
        shape: UntagResourceOutput,
    },
    errors: [
        {
            shape: KMSInternalException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: KMSInvalidStateException,
        },
        {
            shape: TagException,
        },
    ],
};