import { DeleteResolverInput } from "../shapes/DeleteResolverInput";
import { DeleteResolverOutput } from "../shapes/DeleteResolverOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResolver: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResolver",
  http: {
    method: "DELETE",
    requestUri: "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"
  },
  input: {
    shape: DeleteResolverInput
  },
  output: {
    shape: DeleteResolverOutput
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
