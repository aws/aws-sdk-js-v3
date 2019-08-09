import { AdminListGroupsForUserInput } from "./AdminListGroupsForUserInput";
import { AdminListGroupsForUserOutput } from "./AdminListGroupsForUserOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
