import { ListResolversByFunctionInput } from "../shapes/ListResolversByFunctionInput";
import { ListResolversByFunctionOutput } from "../shapes/ListResolversByFunctionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResolversByFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResolversByFunction",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/functions/{functionId}/resolvers"
  },
  input: {
    shape: ListResolversByFunctionInput
  },
  output: {
    shape: ListResolversByFunctionOutput
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
