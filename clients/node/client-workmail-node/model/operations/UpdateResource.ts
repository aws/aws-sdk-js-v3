import { UpdateResourceInput } from "../shapes/UpdateResourceInput";
import { UpdateResourceOutput } from "../shapes/UpdateResourceOutput";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidConfigurationException } from "../shapes/InvalidConfigurationException";
import { EmailAddressInUseException } from "../shapes/EmailAddressInUseException";
import { MailDomainNotFoundException } from "../shapes/MailDomainNotFoundException";
import { MailDomainStateException } from "../shapes/MailDomainStateException";
import { NameAvailabilityException } from "../shapes/NameAvailabilityException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateResourceInput
  },
  output: {
    shape: UpdateResourceOutput
  },
  errors: [
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: EntityStateException
    },
    {
      shape: InvalidConfigurationException
    },
    {
      shape: EmailAddressInUseException
    },
    {
      shape: MailDomainNotFoundException
    },
    {
      shape: MailDomainStateException
    },
    {
      shape: NameAvailabilityException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
