import {MergePullRequestByFastForwardInput} from './MergePullRequestByFastForwardInput';
import {MergePullRequestByFastForwardOutput} from './MergePullRequestByFastForwardOutput';
import {ManualMergeRequiredException} from './ManualMergeRequiredException';
import {PullRequestAlreadyClosedException} from './PullRequestAlreadyClosedException';
import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {TipOfSourceReferenceIsDifferentException} from './TipOfSourceReferenceIsDifferentException';
import {ReferenceDoesNotExistException} from './ReferenceDoesNotExistException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const MergePullRequestByFastForward: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'MergePullRequestByFastForward',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: MergePullRequestByFastForwardInput,
    },
    output: {
        shape: MergePullRequestByFastForwardOutput,
    },
    errors: [
        {
            shape: ManualMergeRequiredException,
        },
        {
            shape: PullRequestAlreadyClosedException,
        },
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
        },
        {
            shape: TipOfSourceReferenceIsDifferentException,
        },
        {
            shape: ReferenceDoesNotExistException,
        },
        {
            shape: InvalidCommitIdException,
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