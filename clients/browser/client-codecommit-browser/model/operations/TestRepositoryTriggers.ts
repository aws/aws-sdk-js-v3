import { TestRepositoryTriggersInput } from "../shapes/TestRepositoryTriggersInput";
import { TestRepositoryTriggersOutput } from "../shapes/TestRepositoryTriggersOutput";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { RepositoryTriggersListRequiredException } from "../shapes/RepositoryTriggersListRequiredException";
import { MaximumRepositoryTriggersExceededException } from "../shapes/MaximumRepositoryTriggersExceededException";
import { InvalidRepositoryTriggerNameException } from "../shapes/InvalidRepositoryTriggerNameException";
import { InvalidRepositoryTriggerDestinationArnException } from "../shapes/InvalidRepositoryTriggerDestinationArnException";
import { InvalidRepositoryTriggerRegionException } from "../shapes/InvalidRepositoryTriggerRegionException";
import { InvalidRepositoryTriggerCustomDataException } from "../shapes/InvalidRepositoryTriggerCustomDataException";
import { MaximumBranchesExceededException } from "../shapes/MaximumBranchesExceededException";
import { InvalidRepositoryTriggerBranchNameException } from "../shapes/InvalidRepositoryTriggerBranchNameException";
import { InvalidRepositoryTriggerEventsException } from "../shapes/InvalidRepositoryTriggerEventsException";
import { RepositoryTriggerNameRequiredException } from "../shapes/RepositoryTriggerNameRequiredException";
import { RepositoryTriggerDestinationArnRequiredException } from "../shapes/RepositoryTriggerDestinationArnRequiredException";
import { RepositoryTriggerBranchNameListRequiredException } from "../shapes/RepositoryTriggerBranchNameListRequiredException";
import { RepositoryTriggerEventsListRequiredException } from "../shapes/RepositoryTriggerEventsListRequiredException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestRepositoryTriggers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestRepositoryTriggers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestRepositoryTriggersInput
  },
  output: {
    shape: TestRepositoryTriggersOutput
  },
  errors: [
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: InvalidRepositoryNameException
    },
    {
      shape: RepositoryTriggersListRequiredException
    },
    {
      shape: MaximumRepositoryTriggersExceededException
    },
    {
      shape: InvalidRepositoryTriggerNameException
    },
    {
      shape: InvalidRepositoryTriggerDestinationArnException
    },
    {
      shape: InvalidRepositoryTriggerRegionException
    },
    {
      shape: InvalidRepositoryTriggerCustomDataException
    },
    {
      shape: MaximumBranchesExceededException
    },
    {
      shape: InvalidRepositoryTriggerBranchNameException
    },
    {
      shape: InvalidRepositoryTriggerEventsException
    },
    {
      shape: RepositoryTriggerNameRequiredException
    },
    {
      shape: RepositoryTriggerDestinationArnRequiredException
    },
    {
      shape: RepositoryTriggerBranchNameListRequiredException
    },
    {
      shape: RepositoryTriggerEventsListRequiredException
    },
    {
      shape: EncryptionIntegrityChecksFailedException
    },
    {
      shape: EncryptionKeyAccessDeniedException
    },
    {
      shape: EncryptionKeyDisabledException
    },
    {
      shape: EncryptionKeyNotFoundException
    },
    {
      shape: EncryptionKeyUnavailableException
    }
  ]
};
