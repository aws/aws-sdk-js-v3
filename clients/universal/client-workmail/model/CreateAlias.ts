import { CreateAliasInput } from "./CreateAliasInput";
import { CreateAliasOutput } from "./CreateAliasOutput";
import { EmailAddressInUseException } from "./EmailAddressInUseException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MailDomainNotFoundException } from "./MailDomainNotFoundException";
import { MailDomainStateException } from "./MailDomainStateException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAliasInput
  },
  output: {
    shape: CreateAliasOutput
  },
  errors: [
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
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
