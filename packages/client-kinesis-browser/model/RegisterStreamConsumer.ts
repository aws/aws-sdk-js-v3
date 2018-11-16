import {RegisterStreamConsumerInput} from './RegisterStreamConsumerInput';
import {RegisterStreamConsumerOutput} from './RegisterStreamConsumerOutput';
import {InvalidArgumentException} from './InvalidArgumentException';
import {LimitExceededException} from './LimitExceededException';
import {ResourceInUseException} from './ResourceInUseException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const RegisterStreamConsumer: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'RegisterStreamConsumer',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: RegisterStreamConsumerInput,
    },
    output: {
        shape: RegisterStreamConsumerOutput,
    },
    errors: [
        {
            shape: InvalidArgumentException,
        },
        {
            shape: LimitExceededException,
        },
        {
            shape: ResourceInUseException,
        },
        {
            shape: ResourceNotFoundException,
        },
    ],
};