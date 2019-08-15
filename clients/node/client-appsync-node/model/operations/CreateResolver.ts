import { CreateResolverInput } from "../shapes/CreateResolverInput";
import { CreateResolverOutput } from "../shapes/CreateResolverOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResolver: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResolver",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/types/{typeName}/resolvers"
  },
  input: {
    shape: CreateResolverInput
  },
  output: {
    shape: CreateResolverOutput
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
    },
    {
      shape: InternalFailureException
    }
  ]
};
