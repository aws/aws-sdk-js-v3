import { AdminDisableProviderForUserInput } from "./AdminDisableProviderForUserInput";
import { AdminDisableProviderForUserOutput } from "./AdminDisableProviderForUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { AliasExistsException } from "./AliasExistsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminDisableProviderForUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminDisableProviderForUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminDisableProviderForUserInput
  },
  output: {
    shape: AdminDisableProviderForUserOutput
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
      shape: AliasExistsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
