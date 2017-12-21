import {GetCommentsForPullRequestInput} from './GetCommentsForPullRequestInput';
import {GetCommentsForPullRequestOutput} from './GetCommentsForPullRequestOutput';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {CommitIdRequiredException} from './CommitIdRequiredException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {InvalidMaxResultsException} from './InvalidMaxResultsException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {RepositoryNotAssociatedWithPullRequestException} from './RepositoryNotAssociatedWithPullRequestException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCommentsForPullRequest: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetCommentsForPullRequest',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetCommentsForPullRequestInput,
    },
    output: {
        shape: GetCommentsForPullRequestOutput,
    },
    errors: [
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
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
            shape: RepositoryNotAssociatedWithPullRequestException,
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