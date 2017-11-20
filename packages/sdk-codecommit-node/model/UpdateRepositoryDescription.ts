import {UpdateRepositoryDescriptionInput} from './UpdateRepositoryDescriptionInput';
import {UpdateRepositoryDescriptionOutput} from './UpdateRepositoryDescriptionOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {InvalidRepositoryDescriptionException} from './InvalidRepositoryDescriptionException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateRepositoryDescription: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateRepositoryDescription',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdateRepositoryDescriptionInput,
    },
    output: {
        shape: UpdateRepositoryDescriptionOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: InvalidRepositoryDescriptionException,
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