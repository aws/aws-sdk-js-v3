import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {ClientRequestTokenRequiredException} from './ClientRequestTokenRequiredException';
import {InvalidClientRequestTokenException} from './InvalidClientRequestTokenException';
import {IdempotencyParameterMismatchException} from './IdempotencyParameterMismatchException';
import {ReferenceNameRequiredException} from './ReferenceNameRequiredException';
import {InvalidReferenceNameException} from './InvalidReferenceNameException';
import {ReferenceDoesNotExistException} from './ReferenceDoesNotExistException';
import {ReferenceTypeNotSupportedException} from './ReferenceTypeNotSupportedException';
import {TitleRequiredException} from './TitleRequiredException';
import {InvalidTitleException} from './InvalidTitleException';
import {InvalidDescriptionException} from './InvalidDescriptionException';
import {TargetsRequiredException} from './TargetsRequiredException';
import {InvalidTargetsException} from './InvalidTargetsException';
import {TargetRequiredException} from './TargetRequiredException';
import {InvalidTargetException} from './InvalidTargetException';
import {MultipleRepositoriesInPullRequestException} from './MultipleRepositoriesInPullRequestException';
import {MaximumOpenPullRequestsExceededException} from './MaximumOpenPullRequestsExceededException';
import {SourceAndDestinationAreSameException} from './SourceAndDestinationAreSameException';
export type CreatePullRequestExceptionsUnion = RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    ClientRequestTokenRequiredException |
    InvalidClientRequestTokenException |
    IdempotencyParameterMismatchException |
    ReferenceNameRequiredException |
    InvalidReferenceNameException |
    ReferenceDoesNotExistException |
    ReferenceTypeNotSupportedException |
    TitleRequiredException |
    InvalidTitleException |
    InvalidDescriptionException |
    TargetsRequiredException |
    InvalidTargetsException |
    TargetRequiredException |
    InvalidTargetException |
    MultipleRepositoriesInPullRequestException |
    MaximumOpenPullRequestsExceededException |
    SourceAndDestinationAreSameException;
