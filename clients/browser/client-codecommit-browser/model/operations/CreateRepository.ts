import { CreateRepositoryInput } from "../shapes/CreateRepositoryInput";
import { CreateRepositoryOutput } from "../shapes/CreateRepositoryOutput";
import { RepositoryNameExistsException } from "../shapes/RepositoryNameExistsException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { InvalidRepositoryDescriptionException } from "../shapes/InvalidRepositoryDescriptionException";
import { RepositoryLimitExceededException } from "../shapes/RepositoryLimitExceededException";
import { EncryptionIntegrityChecksFailedException } from "../shapes/EncryptionIntegrityChecksFailedException";
import { EncryptionKeyAccessDeniedException } from "../shapes/EncryptionKeyAccessDeniedException";
import { EncryptionKeyDisabledException } from "../shapes/EncryptionKeyDisabledException";
import { EncryptionKeyNotFoundException } from "../shapes/EncryptionKeyNotFoundException";
import { EncryptionKeyUnavailableException } from "../shapes/EncryptionKeyUnavailableException";
import { InvalidTagsMapException } from "../shapes/InvalidTagsMapException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InvalidSystemTagUsageException } from "../shapes/InvalidSystemTagUsageException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRepositoryInput
  },
  output: {
    shape: CreateRepositoryOutput
  },
  errors: [
    {
      shape: RepositoryNameExistsException
    },
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: InvalidRepositoryNameException
    },
    {
      shape: InvalidRepositoryDescriptionException
    },
    {
      shape: RepositoryLimitExceededException
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
    },
    {
      shape: InvalidTagsMapException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: InvalidSystemTagUsageException
    },
    {
      shape: TagPolicyException
    }
  ]
};
