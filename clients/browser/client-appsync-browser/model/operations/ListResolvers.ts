import { ListResolversInput } from "../shapes/ListResolversInput";
import { ListResolversOutput } from "../shapes/ListResolversOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResolvers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResolvers",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/types/{typeName}/resolvers"
  },
  input: {
    shape: ListResolversInput
  },
  output: {
    shape: ListResolversOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
