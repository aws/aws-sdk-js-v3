import {DeleteRepositoryInput} from './DeleteRepositoryInput';
import {DeleteRepositoryOutput} from './DeleteRepositoryOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteRepository: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteRepository',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteRepositoryInput,
    },
    output: {
        shape: DeleteRepositoryOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};