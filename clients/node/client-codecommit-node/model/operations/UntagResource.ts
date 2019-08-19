import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "../shapes/ResourceArnRequiredException";
import { InvalidResourceArnException } from "../shapes/InvalidResourceArnException";
import { TagKeysListRequiredException } from "../shapes/TagKeysListRequiredException";
import { InvalidTagKeysListException } from "../shapes/InvalidTagKeysListException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InvalidSystemTagUsageException } from "../shapes/InvalidSystemTagUsageException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: [
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: InvalidRepositoryNameException
    },
    {
      shape: ResourceArnRequiredException
    },
    {
      shape: InvalidResourceArnException
    },
    {
      shape: TagKeysListRequiredException
    },
    {
      shape: InvalidTagKeysListException
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
