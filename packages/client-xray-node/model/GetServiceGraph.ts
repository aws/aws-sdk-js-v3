import {GetServiceGraphInput} from './GetServiceGraphInput';
import {GetServiceGraphOutput} from './GetServiceGraphOutput';
import {InvalidRequestException} from './InvalidRequestException';
import {ThrottledException} from './ThrottledException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetServiceGraph: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetServiceGraph',
    http: {
        method: 'POST',
        requestUri: '/ServiceGraph',
    },
    input: {
        shape: GetServiceGraphInput,
    },
    output: {
        shape: GetServiceGraphOutput,
    },
    errors: [
        {
            shape: InvalidRequestException,
        },
        {
            shape: ThrottledException,
        },
    ],
};