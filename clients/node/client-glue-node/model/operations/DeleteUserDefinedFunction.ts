import { DeleteUserDefinedFunctionInput } from "../shapes/DeleteUserDefinedFunctionInput";
import { DeleteUserDefinedFunctionOutput } from "../shapes/DeleteUserDefinedFunctionOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserDefinedFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserDefinedFunction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserDefinedFunctionInput
  },
  output: {
    shape: DeleteUserDefinedFunctionOutput
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
    }
  ]
};
