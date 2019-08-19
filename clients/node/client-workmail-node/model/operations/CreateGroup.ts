import { CreateGroupInput } from "../shapes/CreateGroupInput";
import { CreateGroupOutput } from "../shapes/CreateGroupOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NameAvailabilityException } from "../shapes/NameAvailabilityException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { ReservedNameException } from "../shapes/ReservedNameException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGroupInput
  },
  output: {
    shape: CreateGroupOutput
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
