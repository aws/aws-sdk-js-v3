import {RepositoryNamesRequiredException} from './RepositoryNamesRequiredException';
import {MaximumRepositoryNamesExceededException} from './MaximumRepositoryNamesExceededException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {SdkExceptions} from '@aws/types';
export type BatchGetRepositoriesExceptionTypesUnion = RepositoryNamesRequiredException |
    MaximumRepositoryNamesExceededException |
    InvalidRepositoryNameException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    SdkExceptions;
