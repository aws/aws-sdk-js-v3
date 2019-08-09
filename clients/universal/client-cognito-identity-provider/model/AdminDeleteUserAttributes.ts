import { AdminDeleteUserAttributesInput } from "./AdminDeleteUserAttributesInput";
import { AdminDeleteUserAttributesOutput } from "./AdminDeleteUserAttributesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
