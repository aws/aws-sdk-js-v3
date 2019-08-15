import { CreateUserInput } from "../shapes/CreateUserInput";
import { CreateUserOutput } from "../shapes/CreateUserOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { NameAvailabilityException } from "../shapes/NameAvailabilityException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { ReservedNameException } from "../shapes/ReservedNameException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserInput
  },
  output: {
    shape: CreateUserOutput
  },
  errors: [
    {
      shape: DirectoryServiceAuthenticationFailedException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidPasswordException
    },
    {
      shape: NameAvailabilityException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    },
    {
      shape: ReservedNameException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
