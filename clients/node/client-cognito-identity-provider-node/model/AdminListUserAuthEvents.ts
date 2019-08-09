import { AdminListUserAuthEventsInput } from "./AdminListUserAuthEventsInput";
import { AdminListUserAuthEventsOutput } from "./AdminListUserAuthEventsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserPoolAddOnNotEnabledException } from "./UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminListUserAuthEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminListUserAuthEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminListUserAuthEventsInput
  },
  output: {
    shape: AdminListUserAuthEventsOutput
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
      shape: UserPoolAddOnNotEnabledException
    },
    {
      shape: InternalErrorException
    }
  ]
};
