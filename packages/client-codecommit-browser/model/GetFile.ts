import {GetFileInput} from './GetFileInput';
import {GetFileOutput} from './GetFileOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidCommitException} from './InvalidCommitException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {PathRequiredException} from './PathRequiredException';
import {InvalidPathException} from './InvalidPathException';
import {FileDoesNotExistException} from './FileDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {FileTooLargeException} from './FileTooLargeException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetFile: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetFile',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetFileInput,
    },
    output: {
        shape: GetFileOutput,
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
            shape: InvalidCommitException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: PathRequiredException,
        },
        {
            shape: InvalidPathException,
        },
        {
            shape: FileDoesNotExistException,
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