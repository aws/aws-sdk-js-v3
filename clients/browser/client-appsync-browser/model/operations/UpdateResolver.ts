import { UpdateResolverInput } from "../shapes/UpdateResolverInput";
import { UpdateResolverOutput } from "../shapes/UpdateResolverOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateResolver: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResolver",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"
  },
  input: {
    shape: UpdateResolverInput
  },
  output: {
    shape: UpdateResolverOutput
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
