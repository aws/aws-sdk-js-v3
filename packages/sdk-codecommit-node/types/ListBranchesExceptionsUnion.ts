import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {InvalidContinuationTokenException} from './InvalidContinuationTokenException';
import {UnkownServiceException} from '@aws/types';
export type ListBranchesExceptionsUnion = RepositoryNameRequiredException |
    RepositoryDoesNotExistException |
    InvalidRepositoryNameException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    InvalidContinuationTokenException |
    UnkownServiceException;
