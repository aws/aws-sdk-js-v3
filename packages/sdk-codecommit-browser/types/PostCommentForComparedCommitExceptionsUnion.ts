import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {ClientRequestTokenRequiredException} from './ClientRequestTokenRequiredException';
import {InvalidClientRequestTokenException} from './InvalidClientRequestTokenException';
import {IdempotencyParameterMismatchException} from './IdempotencyParameterMismatchException';
import {CommentContentRequiredException} from './CommentContentRequiredException';
import {CommentContentSizeLimitExceededException} from './CommentContentSizeLimitExceededException';
import {InvalidFileLocationException} from './InvalidFileLocationException';
import {InvalidRelativeFileVersionEnumException} from './InvalidRelativeFileVersionEnumException';
import {PathRequiredException} from './PathRequiredException';
import {InvalidFilePositionException} from './InvalidFilePositionException';
import {CommitIdRequiredException} from './CommitIdRequiredException';
import {InvalidCommitIdException} from './InvalidCommitIdException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {BeforeCommitIdAndAfterCommitIdAreSameException} from './BeforeCommitIdAndAfterCommitIdAreSameException';
import {CommitDoesNotExistException} from './CommitDoesNotExistException';
import {InvalidPathException} from './InvalidPathException';
import {PathDoesNotExistException} from './PathDoesNotExistException';
import {UnkownServiceException} from '@aws/types';
export type PostCommentForComparedCommitExceptionsUnion = RepositoryNameRequiredException |
    RepositoryDoesNotExistException |
    InvalidRepositoryNameException |
    ClientRequestTokenRequiredException |
    InvalidClientRequestTokenException |
    IdempotencyParameterMismatchException |
    CommentContentRequiredException |
    CommentContentSizeLimitExceededException |
    InvalidFileLocationException |
    InvalidRelativeFileVersionEnumException |
    PathRequiredException |
    InvalidFilePositionException |
    CommitIdRequiredException |
    InvalidCommitIdException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    BeforeCommitIdAndAfterCommitIdAreSameException |
    CommitDoesNotExistException |
    InvalidPathException |
    PathDoesNotExistException |
    UnkownServiceException;
