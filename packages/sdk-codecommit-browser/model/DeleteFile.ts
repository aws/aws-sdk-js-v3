import {DeleteFileInput} from './DeleteFileInput';
import {DeleteFileOutput} from './DeleteFileOutput';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {ParentCommitIdRequiredException} from './ParentCommitIdRequiredException';
import {InvalidParentCommitIdException} from './InvalidParentCommitIdException';
import {ParentCommitDoesNotExistException} from './ParentCommitDoesNotExistException';
import {ParentCommitIdOutdatedException} from './ParentCommitIdOutdatedException';
import {PathRequiredException} from './PathRequiredException';
import {InvalidPathException} from './InvalidPathException';
import {FileDoesNotExistException} from './FileDoesNotExistException';
import {BranchNameRequiredException} from './BranchNameRequiredException';
import {InvalidBranchNameException} from './InvalidBranchNameException';
import {BranchDoesNotExistException} from './BranchDoesNotExistException';
import {BranchNameIsTagNameException} from './BranchNameIsTagNameException';
import {NameLengthExceededException} from './NameLengthExceededException';
import {InvalidEmailException} from './InvalidEmailException';
import {CommitMessageLengthExceededException} from './CommitMessageLengthExceededException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteFile: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteFile',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteFileInput,
    },
    output: {
        shape: DeleteFileOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: ParentCommitIdRequiredException,
        },
        {
            shape: InvalidParentCommitIdException,
        },
        {
            shape: ParentCommitDoesNotExistException,
        },
        {
            shape: ParentCommitIdOutdatedException,
        },
        {
            shape: PathRequiredException,
        },
        {
            shape: InvalidPathException,
        },
        {
            shape: FileDoesNotExistException,
        },
        {
            shape: BranchNameRequiredException,
        },
        {
            shape: InvalidBranchNameException,
        },
        {
            shape: BranchDoesNotExistException,
        },
        {
            shape: BranchNameIsTagNameException,
        },
        {
            shape: NameLengthExceededException,
        },
        {
            shape: InvalidEmailException,
        },
        {
            shape: CommitMessageLengthExceededException,
        },
        {
            shape: EncryptionIntegrityChecksFailedException,
        },
        {
            shape: EncryptionKeyAccessDeniedException,
        },
        {
            shape: EncryptionKeyDisabledException,
        },
        {
            shape: EncryptionKeyNotFoundException,
        },
        {
            shape: EncryptionKeyUnavailableException,
        },
    ],
};