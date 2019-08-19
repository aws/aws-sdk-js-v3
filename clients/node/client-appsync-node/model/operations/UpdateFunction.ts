import { UpdateFunctionInput } from "../shapes/UpdateFunctionInput";
import { UpdateFunctionOutput } from "../shapes/UpdateFunctionOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFunction",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/functions/{functionId}"
  },
  input: {
    shape: UpdateFunctionInput
  },
  output: {
    shape: UpdateFunctionOutput
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
