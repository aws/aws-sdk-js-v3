import { UpdateDomainAssociationInput } from "../shapes/UpdateDomainAssociationInput";
import { UpdateDomainAssociationOutput } from "../shapes/UpdateDomainAssociationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
