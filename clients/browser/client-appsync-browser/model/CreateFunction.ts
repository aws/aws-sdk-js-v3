import { CreateFunctionInput } from "./CreateFunctionInput";
import { CreateFunctionOutput } from "./CreateFunctionOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
