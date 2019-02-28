import {GetKeyRotationStatusInput} from './GetKeyRotationStatusInput';
import {GetKeyRotationStatusOutput} from './GetKeyRotationStatusOutput';
import {NotFoundException} from './NotFoundException';
import {InvalidArnException} from './InvalidArnException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetKeyRotationStatus: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetKeyRotationStatus',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetKeyRotationStatusInput,
    },
    output: {
        shape: GetKeyRotationStatusOutput,
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
        {
            shape: UnsupportedOperationException,
        },
    ],
};