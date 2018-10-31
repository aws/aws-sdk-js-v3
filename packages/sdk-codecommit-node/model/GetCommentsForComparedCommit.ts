import {GetCommentsForComparedCommitInput} from './GetCommentsForComparedCommitInput';
import {GetCommentsForComparedCommitOutput} from './GetCommentsForComparedCommitOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {CommitIdRequiredException} from './CommitIdRequiredException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {InvalidMaxResultsException} from './InvalidMaxResultsException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCommentsForComparedCommit: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetCommentsForComparedCommit',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommentsForComparedCommitInput,
    },
    output: {
        shape: GetCommentsForComparedCommitOutput,
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
            shape: CommitIdRequiredException,
        },
        {
            shape: InvalidCommitIdException,
        },
        {
            shape: CommitDoesNotExistException,
        },
        {
            shape: InvalidMaxResultsException,
        },
        {
            shape: InvalidContinuationTokenException,
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