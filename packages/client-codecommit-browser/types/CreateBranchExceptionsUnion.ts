import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {BranchNameRequiredException} from './BranchNameRequiredException';
import {BranchNameExistsException} from './BranchNameExistsException';
import {InvalidBranchNameException} from './InvalidBranchNameException';
import {CommitIdRequiredException} from './CommitIdRequiredException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
export type CreateBranchExceptionsUnion = RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    BranchNameRequiredException |
    BranchNameExistsException |
    InvalidBranchNameException |
    CommitIdRequiredException |
    CommitDoesNotExistException |
    InvalidCommitIdException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException;
