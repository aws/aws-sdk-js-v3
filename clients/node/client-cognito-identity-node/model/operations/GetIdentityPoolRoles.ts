import { GetIdentityPoolRolesInput } from "../shapes/GetIdentityPoolRolesInput";
import { GetIdentityPoolRolesOutput } from "../shapes/GetIdentityPoolRolesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIdentityPoolRoles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityPoolRoles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityPoolRolesInput
  },
  output: {
    shape: GetIdentityPoolRolesOutput
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
