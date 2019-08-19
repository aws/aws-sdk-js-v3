import { UnlinkDeveloperIdentityInput } from "../shapes/UnlinkDeveloperIdentityInput";
import { UnlinkDeveloperIdentityOutput } from "../shapes/UnlinkDeveloperIdentityOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UnlinkDeveloperIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnlinkDeveloperIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnlinkDeveloperIdentityInput
  },
  output: {
    shape: UnlinkDeveloperIdentityOutput
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
    }
  ]
};
