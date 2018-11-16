import {PutRecordsInput} from './PutRecordsInput';
import {PutRecordsOutput} from './PutRecordsOutput';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidArgumentException} from './InvalidArgumentException';
import {ProvisionedThroughputExceededException} from './ProvisionedThroughputExceededException';
import {KMSDisabledException} from './KMSDisabledException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {KMSAccessDeniedException} from './KMSAccessDeniedException';
import {KMSNotFoundException} from './KMSNotFoundException';
import {KMSOptInRequired} from './KMSOptInRequired';
import {KMSThrottlingException} from './KMSThrottlingException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const PutRecords: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'PutRecords',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: PutRecordsInput,
    },
    output: {
        shape: PutRecordsOutput,
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