import { GetUserDefinedFunctionsInput } from "../shapes/GetUserDefinedFunctionsInput";
import { GetUserDefinedFunctionsOutput } from "../shapes/GetUserDefinedFunctionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { GlueEncryptionException } from "../shapes/GlueEncryptionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUserDefinedFunctions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserDefinedFunctions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUserDefinedFunctionsInput
  },
  output: {
    shape: GetUserDefinedFunctionsOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: GlueEncryptionException
    }
  ]
};
