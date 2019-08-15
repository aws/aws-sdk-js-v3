import { CreateFunctionInput } from "../shapes/CreateFunctionInput";
import { CreateFunctionOutput } from "../shapes/CreateFunctionOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFunction",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/functions"
  },
  input: {
    shape: CreateFunctionInput
  },
  output: {
    shape: CreateFunctionOutput
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
