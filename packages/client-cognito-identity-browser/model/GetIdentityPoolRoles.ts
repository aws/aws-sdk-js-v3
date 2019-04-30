import { GetIdentityPoolRolesInput } from "./GetIdentityPoolRolesInput";
import { GetIdentityPoolRolesOutput } from "./GetIdentityPoolRolesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
