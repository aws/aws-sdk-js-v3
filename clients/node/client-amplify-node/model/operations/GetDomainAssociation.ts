import { GetDomainAssociationInput } from "../shapes/GetDomainAssociationInput";
import { GetDomainAssociationOutput } from "../shapes/GetDomainAssociationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
