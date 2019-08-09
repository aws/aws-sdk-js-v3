import { DeleteFunctionInput } from "./DeleteFunctionInput";
import { DeleteFunctionOutput } from "./DeleteFunctionOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
