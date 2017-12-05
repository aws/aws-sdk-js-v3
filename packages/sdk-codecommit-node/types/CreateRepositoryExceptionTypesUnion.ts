import {RepositoryNameExistsException} from './RepositoryNameExistsException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {InvalidRepositoryDescriptionException} from './InvalidRepositoryDescriptionException';
import {RepositoryLimitExceededException} from './RepositoryLimitExceededException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {SdkExceptions} from '@aws/types';
export type CreateRepositoryExceptionTypesUnion = RepositoryNameExistsException |
    RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    InvalidRepositoryDescriptionException |
    RepositoryLimitExceededException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    SdkExceptions;
