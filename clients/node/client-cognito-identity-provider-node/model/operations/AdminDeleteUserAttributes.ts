import { AdminDeleteUserAttributesInput } from "../shapes/AdminDeleteUserAttributesInput";
import { AdminDeleteUserAttributesOutput } from "../shapes/AdminDeleteUserAttributesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminDeleteUserAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminDeleteUserAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminDeleteUserAttributesInput
  },
  output: {
    shape: AdminDeleteUserAttributesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
