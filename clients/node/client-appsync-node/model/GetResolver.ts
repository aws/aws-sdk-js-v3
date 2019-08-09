import { GetResolverInput } from "./GetResolverInput";
import { GetResolverOutput } from "./GetResolverOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetResolver: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetResolver",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"
  },
  input: {
    shape: GetResolverInput
  },
  output: {
    shape: GetResolverOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
