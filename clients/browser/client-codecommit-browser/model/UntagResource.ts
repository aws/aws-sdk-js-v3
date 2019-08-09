import { UntagResourceInput } from "./UntagResourceInput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { InvalidResourceArnException } from "./InvalidResourceArnException";
import { TagKeysListRequiredException } from "./TagKeysListRequiredException";
import { InvalidTagKeysListException } from "./InvalidTagKeysListException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidSystemTagUsageException } from "./InvalidSystemTagUsageException";
import { TagPolicyException } from "./TagPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
