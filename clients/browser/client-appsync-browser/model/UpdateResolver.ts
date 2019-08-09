import { UpdateResolverInput } from "./UpdateResolverInput";
import { UpdateResolverOutput } from "./UpdateResolverOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
