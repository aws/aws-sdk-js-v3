import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {MergeOptionRequiredException} from './MergeOptionRequiredException';
import {InvalidMergeOptionException} from './InvalidMergeOptionException';
import {InvalidDestinationCommitSpecifierException} from './InvalidDestinationCommitSpecifierException';
import {InvalidSourceCommitSpecifierException} from './InvalidSourceCommitSpecifierException';
import {CommitRequiredException} from './CommitRequiredException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {InvalidCommitException} from './InvalidCommitException';
import {TipsDivergenceExceededException} from './TipsDivergenceExceededException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
export type GetMergeConflictsExceptionsUnion = RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    MergeOptionRequiredException |
    InvalidMergeOptionException |
    InvalidDestinationCommitSpecifierException |
    InvalidSourceCommitSpecifierException |
    CommitRequiredException |
    CommitDoesNotExistException |
    InvalidCommitException |
    TipsDivergenceExceededException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException;
