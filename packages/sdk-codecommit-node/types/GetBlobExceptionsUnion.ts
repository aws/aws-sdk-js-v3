import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {BlobIdRequiredException} from './BlobIdRequiredException';
import {InvalidBlobIdException} from './InvalidBlobIdException';
import {BlobIdDoesNotExistException} from './BlobIdDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {FileTooLargeException} from './FileTooLargeException';
import {UnkownServiceException} from '@aws/types';
export type GetBlobExceptionsUnion = RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    BlobIdRequiredException |
    InvalidBlobIdException |
    BlobIdDoesNotExistException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    FileTooLargeException |
    UnkownServiceException;
