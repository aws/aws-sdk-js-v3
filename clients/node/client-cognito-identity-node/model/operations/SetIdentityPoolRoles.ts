import { SetIdentityPoolRolesInput } from "../shapes/SetIdentityPoolRolesInput";
import { SetIdentityPoolRolesOutput } from "../shapes/SetIdentityPoolRolesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetIdentityPoolRoles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetIdentityPoolRoles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetIdentityPoolRolesInput
  },
  output: {
    shape: SetIdentityPoolRolesOutput
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
    }
  ]
};
