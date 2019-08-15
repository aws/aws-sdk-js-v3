import { DeleteFunctionInput } from "../shapes/DeleteFunctionInput";
import { DeleteFunctionOutput } from "../shapes/DeleteFunctionOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFunction",
  http: {
    method: "DELETE",
    requestUri: "/v1/apis/{apiId}/functions/{functionId}"
  },
  input: {
    shape: DeleteFunctionInput
  },
  output: {
    shape: DeleteFunctionOutput
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
