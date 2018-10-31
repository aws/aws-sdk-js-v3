import {UpdatePullRequestStatusInput} from './UpdatePullRequestStatusInput';
import {UpdatePullRequestStatusOutput} from './UpdatePullRequestStatusOutput';
import {PullRequestDoesNotExistException} from './PullRequestDoesNotExistException';
import {InvalidPullRequestIdException} from './InvalidPullRequestIdException';
import {PullRequestIdRequiredException} from './PullRequestIdRequiredException';
import {InvalidPullRequestStatusUpdateException} from './InvalidPullRequestStatusUpdateException';
import {InvalidPullRequestStatusException} from './InvalidPullRequestStatusException';
import {PullRequestStatusRequiredException} from './PullRequestStatusRequiredException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdatePullRequestStatus: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdatePullRequestStatus',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: UpdatePullRequestStatusInput,
    },
    output: {
        shape: UpdatePullRequestStatusOutput,
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
            shape: InvalidPullRequestStatusUpdateException,
        },
        {
            shape: InvalidPullRequestStatusException,
        },
        {
            shape: PullRequestStatusRequiredException,
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