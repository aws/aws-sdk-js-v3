import { ListDomainAssociationsInput } from "./ListDomainAssociationsInput";
import { ListDomainAssociationsOutput } from "./ListDomainAssociationsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
