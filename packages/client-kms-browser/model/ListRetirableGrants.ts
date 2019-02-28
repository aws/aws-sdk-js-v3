import {ListRetirableGrantsInput} from './ListRetirableGrantsInput';
import {ListRetirableGrantsOutput} from './ListRetirableGrantsOutput';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidMarkerException} from './InvalidMarkerException';
import {InvalidArnException} from './InvalidArnException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListRetirableGrants: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListRetirableGrants',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListRetirableGrantsInput,
    },
    output: {
        shape: ListRetirableGrantsOutput,
    },
    errors: [
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidMarkerException,
        },
        {
            shape: InvalidArnException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: KMSInternalException,
        },
    ],
};