import { UntagResourceInput } from "./UntagResourceInput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { ApplicationDoesNotExistException } from "./ApplicationDoesNotExistException";
import { DeploymentGroupDoesNotExistException } from "./DeploymentGroupDoesNotExistException";
import { DeploymentConfigDoesNotExistException } from "./DeploymentConfigDoesNotExistException";
import { TagRequiredException } from "./TagRequiredException";
import { InvalidTagsToAddException } from "./InvalidTagsToAddException";
import { ArnNotSupportedException } from "./ArnNotSupportedException";
import { InvalidArnException } from "./InvalidArnException";
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
      shape: ResourceArnRequiredException
    },
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: DeploymentGroupDoesNotExistException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    },
    {
      shape: TagRequiredException
    },
    {
      shape: InvalidTagsToAddException
    },
    {
      shape: ArnNotSupportedException
    },
    {
      shape: InvalidArnException
    }
  ]
};
