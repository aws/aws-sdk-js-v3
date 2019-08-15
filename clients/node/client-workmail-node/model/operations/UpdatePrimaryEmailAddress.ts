import { UpdatePrimaryEmailAddressInput } from "../shapes/UpdatePrimaryEmailAddressInput";
import { UpdatePrimaryEmailAddressOutput } from "../shapes/UpdatePrimaryEmailAddressOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EmailAddressInUseException } from "../shapes/EmailAddressInUseException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MailDomainNotFoundException } from "../shapes/MailDomainNotFoundException";
import { MailDomainStateException } from "../shapes/MailDomainStateException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePrimaryEmailAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePrimaryEmailAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdatePrimaryEmailAddressInput
  },
  output: {
    shape: UpdatePrimaryEmailAddressOutput
  },
  errors: [
    {
      shape: DirectoryServiceAuthenticationFailedException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: EmailAddressInUseException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: EntityStateException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: MailDomainNotFoundException
    },
    {
      shape: MailDomainStateException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
