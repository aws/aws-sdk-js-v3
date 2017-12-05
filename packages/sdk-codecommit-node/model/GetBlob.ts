import {GetBlobInput} from './GetBlobInput';
import {GetBlobOutput} from './GetBlobOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {BlobIdRequiredException} from './BlobIdRequiredException';
import {InvalidBlobIdException} from './InvalidBlobIdException';
import {BlobIdDoesNotExistException} from './BlobIdDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {FileTooLargeException} from './FileTooLargeException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBlob: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBlob',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetBlobInput,
    },
    output: {
        shape: GetBlobOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: BlobIdRequiredException,
        },
        {
            shape: InvalidBlobIdException,
        },
        {
            shape: BlobIdDoesNotExistException,
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
        {
            shape: FileTooLargeException,
        },
    ],
};