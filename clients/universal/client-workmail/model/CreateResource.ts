import { CreateResourceInput } from "./CreateResourceInput";
import { CreateResourceOutput } from "./CreateResourceOutput";
import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NameAvailabilityException } from "./NameAvailabilityException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { ReservedNameException } from "./ReservedNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
