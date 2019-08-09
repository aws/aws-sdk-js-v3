import { RegisterToWorkMailInput } from "./RegisterToWorkMailInput";
import { RegisterToWorkMailOutput } from "./RegisterToWorkMailOutput";
import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EmailAddressInUseException } from "./EmailAddressInUseException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { EntityAlreadyRegisteredException } from "./EntityAlreadyRegisteredException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MailDomainNotFoundException } from "./MailDomainNotFoundException";
import { MailDomainStateException } from "./MailDomainStateException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
