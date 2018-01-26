import {DeleteIdentitiesInput} from './DeleteIdentitiesInput';
import {DeleteIdentitiesOutput} from './DeleteIdentitiesOutput';
import {InvalidParameterException} from './InvalidParameterException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {InternalErrorException} from './InternalErrorException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteIdentities: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteIdentities',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteIdentitiesInput,
    },
    output: {
        shape: DeleteIdentitiesOutput,
    },
    errors: [
        {
            shape: InvalidParameterException,
        },
        {
            shape: TooManyRequestsException,
        },
        {
            shape: InternalErrorException,
        },
    ],
};