import { UpdateIdentityPoolInput } from "../shapes/UpdateIdentityPoolInput";
import { UpdateIdentityPoolOutput } from "../shapes/UpdateIdentityPoolOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateIdentityPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIdentityPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateIdentityPoolInput
  },
  output: {
    shape: UpdateIdentityPoolOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: LimitExceededException
    }
  ]
};
