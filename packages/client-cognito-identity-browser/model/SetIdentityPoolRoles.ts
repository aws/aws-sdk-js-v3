import { SetIdentityPoolRolesInput } from "./SetIdentityPoolRolesInput";
import { SetIdentityPoolRolesOutput } from "./SetIdentityPoolRolesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
