import { ListResolversByFunctionInput } from "./ListResolversByFunctionInput";
import { ListResolversByFunctionOutput } from "./ListResolversByFunctionOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
