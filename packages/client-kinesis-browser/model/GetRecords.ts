import {GetRecordsInput} from './GetRecordsInput';
import {GetRecordsOutput} from './GetRecordsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {ExpiredIteratorException} from './ExpiredIteratorException';
import {KMSDisabledException} from './KMSDisabledException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {KMSAccessDeniedException} from './KMSAccessDeniedException';
import {KMSNotFoundException} from './KMSNotFoundException';
import {KMSOptInRequired} from './KMSOptInRequired';
import {KMSThrottlingException} from './KMSThrottlingException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetRecords: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetRecords',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetRecordsInput,
    },
    output: {
        shape: GetRecordsOutput,
    },
    errors: [
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InvalidArgumentException,
        },
        {
            shape: ProvisionedThroughputExceededException,
        },
        {
            shape: ExpiredIteratorException,
        },
        {
            shape: KMSDisabledException,
        },
        {
            shape: KMSInvalidStateException,
        },
        {
            shape: KMSAccessDeniedException,
        },
        {
            shape: KMSNotFoundException,
        },
        {
            shape: KMSOptInRequired,
        },
        {
            shape: KMSThrottlingException,
        },
    ],
};