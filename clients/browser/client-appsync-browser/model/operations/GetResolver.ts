import { GetResolverInput } from "../shapes/GetResolverInput";
import { GetResolverOutput } from "../shapes/GetResolverOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
