import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {ParentCommitIdRequiredException} from './ParentCommitIdRequiredException';
import {InvalidParentCommitIdException} from './InvalidParentCommitIdException';
import {ParentCommitDoesNotExistException} from './ParentCommitDoesNotExistException';
import {ParentCommitIdOutdatedException} from './ParentCommitIdOutdatedException';
import {FileContentRequiredException} from './FileContentRequiredException';
import {FileContentSizeLimitExceededException} from './FileContentSizeLimitExceededException';
import {PathRequiredException} from './PathRequiredException';
import {InvalidPathException} from './InvalidPathException';
import {BranchNameRequiredException} from './BranchNameRequiredException';
import {InvalidBranchNameException} from './InvalidBranchNameException';
import {BranchDoesNotExistException} from './BranchDoesNotExistException';
import {BranchNameIsTagNameException} from './BranchNameIsTagNameException';
import {InvalidFileModeException} from './InvalidFileModeException';
import {NameLengthExceededException} from './NameLengthExceededException';
import {InvalidEmailException} from './InvalidEmailException';
import {CommitMessageLengthExceededException} from './CommitMessageLengthExceededException';
import {InvalidDeletionParameterException} from './InvalidDeletionParameterException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {SameFileContentException} from './SameFileContentException';
import {FileNameConflictsWithDirectoryNameException} from './FileNameConflictsWithDirectoryNameException';
import {DirectoryNameConflictsWithFileNameException} from './DirectoryNameConflictsWithFileNameException';
export type PutFileExceptionsUnion = RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryDoesNotExistException |
    ParentCommitIdRequiredException |
    InvalidParentCommitIdException |
    ParentCommitDoesNotExistException |
    ParentCommitIdOutdatedException |
    FileContentRequiredException |
    FileContentSizeLimitExceededException |
    PathRequiredException |
    InvalidPathException |
    BranchNameRequiredException |
    InvalidBranchNameException |
    BranchDoesNotExistException |
    BranchNameIsTagNameException |
    InvalidFileModeException |
    NameLengthExceededException |
    InvalidEmailException |
    CommitMessageLengthExceededException |
    InvalidDeletionParameterException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    SameFileContentException |
    FileNameConflictsWithDirectoryNameException |
    DirectoryNameConflictsWithFileNameException;
