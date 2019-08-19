import { DeleteDomainAssociationInput } from "../shapes/DeleteDomainAssociationInput";
import { DeleteDomainAssociationOutput } from "../shapes/DeleteDomainAssociationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { DependentServiceFailureException } from "../shapes/DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDomainAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDomainAssociation",
  http: {
    method: "DELETE",
    requestUri: "/apps/{appId}/domains/{domainName}"
  },
  input: {
    shape: DeleteDomainAssociationInput
  },
  output: {
    shape: DeleteDomainAssociationOutput
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
