import { AdminUserGlobalSignOutInput } from "../shapes/AdminUserGlobalSignOutInput";
import { AdminUserGlobalSignOutOutput } from "../shapes/AdminUserGlobalSignOutOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminUserGlobalSignOut: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminUserGlobalSignOut",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminUserGlobalSignOutInput
  },
  output: {
    shape: AdminUserGlobalSignOutOutput
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
