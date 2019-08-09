import { ListResolversInput } from "./ListResolversInput";
import { ListResolversOutput } from "./ListResolversOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
