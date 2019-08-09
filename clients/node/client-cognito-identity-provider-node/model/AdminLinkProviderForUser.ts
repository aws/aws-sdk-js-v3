import { AdminLinkProviderForUserInput } from "./AdminLinkProviderForUserInput";
import { AdminLinkProviderForUserOutput } from "./AdminLinkProviderForUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { AliasExistsException } from "./AliasExistsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminLinkProviderForUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminLinkProviderForUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminLinkProviderForUserInput
  },
  output: {
    shape: AdminLinkProviderForUserOutput
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
