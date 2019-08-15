import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "../shapes/ResourceArnRequiredException";
import { InvalidResourceArnException } from "../shapes/InvalidResourceArnException";
import { TagsMapRequiredException } from "../shapes/TagsMapRequiredException";
import { InvalidTagsMapException } from "../shapes/InvalidTagsMapException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { InvalidSystemTagUsageException } from "../shapes/InvalidSystemTagUsageException";
import { TagPolicyException } from "../shapes/TagPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
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
      shape: TagsMapRequiredException
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
