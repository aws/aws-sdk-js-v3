import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {CommitIdRequiredException} from './CommitIdRequiredException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {CommitIdDoesNotExistException} from './CommitIdDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {SdkExceptions} from '@aws/types';
export type GetCommitExceptionTypesUnion = RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    CommitIdRequiredException |
    InvalidCommitIdException |
    CommitIdDoesNotExistException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    SdkExceptions;
