import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {InvalidPullRequestEventTypeException} from './InvalidPullRequestEventTypeException';
import {InvalidActorArnException} from './InvalidActorArnException';
import {ActorDoesNotExistException} from './ActorDoesNotExistException';
import {InvalidMaxResultsException} from './InvalidMaxResultsException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {UnkownServiceException} from '@aws/types';
export type DescribePullRequestEventsExceptionsUnion = PullRequestDoesNotExistException |
    InvalidPullRequestIdException |
    PullRequestIdRequiredException |
    InvalidPullRequestEventTypeException |
    InvalidActorArnException |
    ActorDoesNotExistException |
    InvalidMaxResultsException |
    InvalidContinuationTokenException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    UnkownServiceException;
