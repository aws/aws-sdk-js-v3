import { DeleteUserDefinedFunctionInput } from "./DeleteUserDefinedFunctionInput";
import { DeleteUserDefinedFunctionOutput } from "./DeleteUserDefinedFunctionOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
