import { UpdateUserDefinedFunctionInput } from "../shapes/UpdateUserDefinedFunctionInput";
import { UpdateUserDefinedFunctionOutput } from "../shapes/UpdateUserDefinedFunctionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserDefinedFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserDefinedFunction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserDefinedFunctionInput
  },
  output: {
    shape: UpdateUserDefinedFunctionOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
