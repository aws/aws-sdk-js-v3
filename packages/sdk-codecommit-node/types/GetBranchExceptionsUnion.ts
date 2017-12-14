import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {BranchNameRequiredException} from './BranchNameRequiredException';
import {InvalidBranchNameException} from './InvalidBranchNameException';
import {BranchDoesNotExistException} from './BranchDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {UnkownServiceException} from '@aws/types';
export type GetBranchExceptionsUnion = RepositoryNameRequiredException |
    RepositoryDoesNotExistException |
    InvalidRepositoryNameException |
    BranchNameRequiredException |
    InvalidBranchNameException |
    BranchDoesNotExistException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    UnkownServiceException;
