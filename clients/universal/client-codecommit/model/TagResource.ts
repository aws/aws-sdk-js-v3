import { TagResourceInput } from "./TagResourceInput";
import { TagResourceOutput } from "./TagResourceOutput";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { InvalidResourceArnException } from "./InvalidResourceArnException";
import { TagsMapRequiredException } from "./TagsMapRequiredException";
import { InvalidTagsMapException } from "./InvalidTagsMapException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidSystemTagUsageException } from "./InvalidSystemTagUsageException";
import { TagPolicyException } from "./TagPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
