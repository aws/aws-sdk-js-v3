import { DeleteDomainAssociationInput } from "./DeleteDomainAssociationInput";
import { DeleteDomainAssociationOutput } from "./DeleteDomainAssociationOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
