import { CreateResourceInput } from "../shapes/CreateResourceInput";
import { CreateResourceOutput } from "../shapes/CreateResourceOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NameAvailabilityException } from "../shapes/NameAvailabilityException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { ReservedNameException } from "../shapes/ReservedNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateResourceInput
  },
  output: {
    shape: CreateResourceOutput
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
    }
  ]
};
