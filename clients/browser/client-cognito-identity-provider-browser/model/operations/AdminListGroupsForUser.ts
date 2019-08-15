import { AdminListGroupsForUserInput } from "../shapes/AdminListGroupsForUserInput";
import { AdminListGroupsForUserOutput } from "../shapes/AdminListGroupsForUserOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminListGroupsForUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminListGroupsForUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminListGroupsForUserInput
  },
  output: {
    shape: AdminListGroupsForUserOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
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
