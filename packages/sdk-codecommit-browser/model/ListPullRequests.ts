import {ListPullRequestsInput} from './ListPullRequestsInput';
import {ListPullRequestsOutput} from './ListPullRequestsOutput';
import {InvalidPullRequestStatusException} from './InvalidPullRequestStatusException';
import {InvalidAuthorArnException} from './InvalidAuthorArnException';
import {AuthorDoesNotExistException} from './AuthorDoesNotExistException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidMaxResultsException} from './InvalidMaxResultsException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const ListPullRequests: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'ListPullRequests',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: ListPullRequestsInput,
    },
    output: {
        shape: ListPullRequestsOutput,
    },
    errors: [
        {
            shape: InvalidPullRequestStatusException,
        },
        {
            shape: InvalidAuthorArnException,
        },
        {
            shape: AuthorDoesNotExistException,
        },
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