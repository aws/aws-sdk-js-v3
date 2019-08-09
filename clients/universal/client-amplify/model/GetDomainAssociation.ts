import { GetDomainAssociationInput } from "./GetDomainAssociationInput";
import { GetDomainAssociationOutput } from "./GetDomainAssociationOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDomainAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainAssociation",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/domains/{domainName}"
  },
  input: {
    shape: GetDomainAssociationInput
  },
  output: {
    shape: GetDomainAssociationOutput
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
    }
  ]
};
