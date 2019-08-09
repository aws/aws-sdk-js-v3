import { UpdateUserDefinedFunctionInput } from "./UpdateUserDefinedFunctionInput";
import { UpdateUserDefinedFunctionOutput } from "./UpdateUserDefinedFunctionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { GlueEncryptionException } from "./GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
