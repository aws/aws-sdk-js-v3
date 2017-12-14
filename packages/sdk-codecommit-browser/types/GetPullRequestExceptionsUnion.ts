import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {UnkownServiceException} from '@aws/types';
export type GetPullRequestExceptionsUnion = PullRequestDoesNotExistException |
    InvalidPullRequestIdException |
    PullRequestIdRequiredException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    UnkownServiceException;
