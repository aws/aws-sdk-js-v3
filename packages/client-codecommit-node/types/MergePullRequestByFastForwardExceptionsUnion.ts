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
export type MergePullRequestByFastForwardExceptionsUnion = ManualMergeRequiredException |
    PullRequestAlreadyClosedException |
    PullRequestDoesNotExistException |
    InvalidPullRequestIdException |
    PullRequestIdRequiredException |
    TipOfSourceReferenceIsDifferentException |
    ReferenceDoesNotExistException |
    InvalidCommitIdException |
    RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException;
