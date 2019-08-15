import { AdminLinkProviderForUserInput } from "../shapes/AdminLinkProviderForUserInput";
import { AdminLinkProviderForUserOutput } from "../shapes/AdminLinkProviderForUserOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { AliasExistsException } from "../shapes/AliasExistsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
