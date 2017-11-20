import {GetCommitInput} from './GetCommitInput';
import {GetCommitOutput} from './GetCommitOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {CommitIdRequiredException} from './CommitIdRequiredException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {CommitIdDoesNotExistException} from './CommitIdDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCommit: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetCommit',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommitInput,
    },
    output: {
        shape: GetCommitOutput,
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
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: CommitIdDoesNotExistException,
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