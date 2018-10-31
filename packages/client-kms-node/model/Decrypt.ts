import {DecryptInput} from './DecryptInput';
import {DecryptOutput} from './DecryptOutput';
import {NotFoundException} from './NotFoundException';
import {DisabledException} from './DisabledException';
import {InvalidCiphertextException} from './InvalidCiphertextException';
import {KeyUnavailableException} from './KeyUnavailableException';
import {DependencyTimeoutException} from './DependencyTimeoutException';
import {InvalidGrantTokenException} from './InvalidGrantTokenException';
import {KMSInternalException} from './KMSInternalException';
import {KMSInvalidStateException} from './KMSInvalidStateException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const Decrypt: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'Decrypt',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DecryptInput,
    },
    output: {
        shape: DecryptOutput,
    },
    errors: [
        {
            shape: NotFoundException,
        },
        {
            shape: DisabledException,
        },
        {
            shape: InvalidCiphertextException,
        },
        {
            shape: KeyUnavailableException,
        },
        {
            shape: DependencyTimeoutException,
        },
        {
            shape: InvalidGrantTokenException,
        },
        {
            shape: KMSInternalException,
        },
        {
            shape: KMSInvalidStateException,
        },
    ],
};