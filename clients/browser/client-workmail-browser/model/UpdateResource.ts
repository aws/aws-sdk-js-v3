import { UpdateResourceInput } from "./UpdateResourceInput";
import { UpdateResourceOutput } from "./UpdateResourceOutput";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidConfigurationException } from "./InvalidConfigurationException";
import { EmailAddressInUseException } from "./EmailAddressInUseException";
import { MailDomainNotFoundException } from "./MailDomainNotFoundException";
import { MailDomainStateException } from "./MailDomainStateException";
import { NameAvailabilityException } from "./NameAvailabilityException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
