import { CreateResolverInput } from "./CreateResolverInput";
import { CreateResolverOutput } from "./CreateResolverOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
