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
import {UnkownServiceException} from '@aws/types';
export type PutRepositoryTriggersExceptionsUnion = RepositoryDoesNotExistException |
    RepositoryNameRequiredException |
    InvalidRepositoryNameException |
    RepositoryTriggersListRequiredException |
    MaximumRepositoryTriggersExceededException |
    InvalidRepositoryTriggerNameException |
    InvalidRepositoryTriggerDestinationArnException |
    InvalidRepositoryTriggerRegionException |
    InvalidRepositoryTriggerCustomDataException |
    MaximumBranchesExceededException |
    InvalidRepositoryTriggerBranchNameException |
    InvalidRepositoryTriggerEventsException |
    RepositoryTriggerNameRequiredException |
    RepositoryTriggerDestinationArnRequiredException |
    RepositoryTriggerBranchNameListRequiredException |
    RepositoryTriggerEventsListRequiredException |
    EncryptionIntegrityChecksFailedException |
    EncryptionKeyAccessDeniedException |
    EncryptionKeyDisabledException |
    EncryptionKeyNotFoundException |
    EncryptionKeyUnavailableException |
    UnkownServiceException;
