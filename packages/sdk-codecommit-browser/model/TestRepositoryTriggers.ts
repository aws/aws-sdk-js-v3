import {TestRepositoryTriggersInput} from './TestRepositoryTriggersInput';
import {TestRepositoryTriggersOutput} from './TestRepositoryTriggersOutput';
import {RepositoryDoesNotExistException} from './RepositoryDoesNotExistException';
import {RepositoryNameRequiredException} from './RepositoryNameRequiredException';
import {InvalidRepositoryNameException} from './InvalidRepositoryNameException';
import {RepositoryTriggersListRequiredException} from './RepositoryTriggersListRequiredException';
import {MaximumRepositoryTriggersExceededException} from './MaximumRepositoryTriggersExceededException';
import {InvalidRepositoryTriggerNameException} from './InvalidRepositoryTriggerNameException';
import {InvalidRepositoryTriggerDestinationArnException} from './InvalidRepositoryTriggerDestinationArnException';
import {InvalidRepositoryTriggerRegionException} from './InvalidRepositoryTriggerRegionException';
import {InvalidRepositoryTriggerCustomDataException} from './InvalidRepositoryTriggerCustomDataException';
import {MaximumBranchesExceededException} from './MaximumBranchesExceededException';
import {InvalidRepositoryTriggerBranchNameException} from './InvalidRepositoryTriggerBranchNameException';
import {InvalidRepositoryTriggerEventsException} from './InvalidRepositoryTriggerEventsException';
import {RepositoryTriggerNameRequiredException} from './RepositoryTriggerNameRequiredException';
import {RepositoryTriggerDestinationArnRequiredException} from './RepositoryTriggerDestinationArnRequiredException';
import {RepositoryTriggerBranchNameListRequiredException} from './RepositoryTriggerBranchNameListRequiredException';
import {RepositoryTriggerEventsListRequiredException} from './RepositoryTriggerEventsListRequiredException';
import {EncryptionIntegrityChecksFailedException} from './EncryptionIntegrityChecksFailedException';
import {EncryptionKeyAccessDeniedException} from './EncryptionKeyAccessDeniedException';
import {EncryptionKeyDisabledException} from './EncryptionKeyDisabledException';
import {EncryptionKeyNotFoundException} from './EncryptionKeyNotFoundException';
import {EncryptionKeyUnavailableException} from './EncryptionKeyUnavailableException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const TestRepositoryTriggers: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'TestRepositoryTriggers',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: TestRepositoryTriggersInput,
    },
    output: {
        shape: TestRepositoryTriggersOutput,
    },
    errors: [
        {
            shape: RepositoryDoesNotExistException,
        },
        {
            shape: RepositoryNameRequiredException,
        },
        {
            shape: InvalidRepositoryNameException,
        },
        {
            shape: RepositoryTriggersListRequiredException,
        },
        {
            shape: MaximumRepositoryTriggersExceededException,
        },
        {
            shape: InvalidRepositoryTriggerNameException,
        },
        {
            shape: InvalidRepositoryTriggerDestinationArnException,
        },
        {
            shape: InvalidRepositoryTriggerRegionException,
        },
        {
            shape: InvalidRepositoryTriggerCustomDataException,
        },
        {
            shape: MaximumBranchesExceededException,
        },
        {
            shape: InvalidRepositoryTriggerBranchNameException,
        },
        {
            shape: InvalidRepositoryTriggerEventsException,
        },
        {
            shape: RepositoryTriggerNameRequiredException,
        },
        {
            shape: RepositoryTriggerDestinationArnRequiredException,
        },
        {
            shape: RepositoryTriggerBranchNameListRequiredException,
        },
        {
            shape: RepositoryTriggerEventsListRequiredException,
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