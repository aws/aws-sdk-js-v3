import {GetParametersForImportInput} from './GetParametersForImportInput';
import {GetParametersForImportOutput} from './GetParametersForImportOutput';
import {InvalidArnException} from './InvalidArnException';
import {UnsupportedOperationException} from './UnsupportedOperationException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {NotFoundException} from './NotFoundException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetParametersForImport: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetParametersForImport',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetParametersForImportInput,
    },
    output: {
        shape: GetParametersForImportOutput,
    },
    errors: [
        {
            shape: InvalidArnException,
        },
        {
            shape: UnsupportedOperationException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};