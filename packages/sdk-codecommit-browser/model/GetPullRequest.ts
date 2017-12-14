import {GetPullRequestInput} from './GetPullRequestInput';
import {GetPullRequestOutput} from './GetPullRequestOutput';
import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetPullRequest: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetPullRequest',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: GetPullRequestInput,
    },
    output: {
        shape: GetPullRequestOutput,
    },
    errors: [
        {
            shape: PullRequestDoesNotExistException,
        },
        {
            shape: InvalidPullRequestIdException,
        },
        {
            shape: PullRequestIdRequiredException,
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