import { RegisterToWorkMailInput } from "../shapes/RegisterToWorkMailInput";
import { RegisterToWorkMailOutput } from "../shapes/RegisterToWorkMailOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EmailAddressInUseException } from "../shapes/EmailAddressInUseException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { EntityAlreadyRegisteredException } from "../shapes/EntityAlreadyRegisteredException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MailDomainNotFoundException } from "../shapes/MailDomainNotFoundException";
import { MailDomainStateException } from "../shapes/MailDomainStateException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterToWorkMail: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterToWorkMail",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterToWorkMailInput
  },
  output: {
    shape: RegisterToWorkMailOutput
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
      shape: EntityAlreadyRegisteredException
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
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
