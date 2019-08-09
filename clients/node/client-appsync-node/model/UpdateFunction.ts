import { UpdateFunctionInput } from "./UpdateFunctionInput";
import { UpdateFunctionOutput } from "./UpdateFunctionOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
