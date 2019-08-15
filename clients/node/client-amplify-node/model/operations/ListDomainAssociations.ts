import { ListDomainAssociationsInput } from "../shapes/ListDomainAssociationsInput";
import { ListDomainAssociationsOutput } from "../shapes/ListDomainAssociationsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDomainAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDomainAssociations",
  http: {
    method: "GET",
    requestUri: "/apps/{appId}/domains"
  },
  input: {
    shape: ListDomainAssociationsInput
  },
  output: {
    shape: ListDomainAssociationsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
