import { GetUserDefinedFunctionInput } from "../shapes/GetUserDefinedFunctionInput";
import { GetUserDefinedFunctionOutput } from "../shapes/GetUserDefinedFunctionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUserDefinedFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserDefinedFunction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUserDefinedFunctionInput
  },
  output: {
    shape: GetUserDefinedFunctionOutput
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
