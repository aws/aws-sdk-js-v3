import {CreateRepositoryInput} from './CreateRepositoryInput';
import {CreateRepositoryOutput} from './CreateRepositoryOutput';
import {RepositoryNameExistsException} from './RepositoryNameExistsException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {InvalidRepositoryDescriptionException} from './InvalidRepositoryDescriptionException';
import {RepositoryLimitExceededException} from './RepositoryLimitExceededException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const CreateRepository: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'CreateRepository',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: CreateRepositoryInput,
    },
    output: {
        shape: CreateRepositoryOutput,
    },
    errors: [
        {
            shape: RepositoryNameExistsException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: InvalidRepositoryDescriptionException,
        },
        {
            shape: RepositoryLimitExceededException,
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