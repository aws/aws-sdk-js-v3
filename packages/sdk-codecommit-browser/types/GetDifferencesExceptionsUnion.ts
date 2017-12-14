import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {InvalidMaxResultsException} from './InvalidMaxResultsException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {CommitRequiredException} from './CommitRequiredException';
import {InvalidCommitException} from './InvalidCommitException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {InvalidPathException} from './InvalidPathException';
import {PathDoesNotExistException} from './PathDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {UnkownServiceException} from '@aws/types';
export type GetDifferencesExceptionsUnion = RepositoryNameRequiredException |
    RepositoryDoesNotExistException |
    InvalidRepositoryNameException |
    InvalidContinuationTokenException |
    InvalidMaxResultsException |
    InvalidCommitIdException |
    CommitRequiredException |
    InvalidCommitException |
    CommitDoesNotExistException |
    InvalidPathException |
    PathDoesNotExistException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    UnkownServiceException;
