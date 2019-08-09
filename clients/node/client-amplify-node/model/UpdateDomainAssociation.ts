import { UpdateDomainAssociationInput } from "./UpdateDomainAssociationInput";
import { UpdateDomainAssociationOutput } from "./UpdateDomainAssociationOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDomainAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDomainAssociation",
  http: {
    method: "POST",
    requestUri: "/apps/{appId}/domains/{domainName}"
  },
  input: {
    shape: UpdateDomainAssociationInput
  },
  output: {
    shape: UpdateDomainAssociationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: DependentServiceFailureException
    }
  ]
};
