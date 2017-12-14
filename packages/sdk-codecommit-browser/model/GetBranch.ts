import {GetBranchInput} from './GetBranchInput';
import {GetBranchOutput} from './GetBranchOutput';
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
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetBranch: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetBranch',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetBranchInput,
    },
    output: {
        shape: GetBranchOutput,
    },
    errors: [
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: InvalidRepositoryNameException,
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