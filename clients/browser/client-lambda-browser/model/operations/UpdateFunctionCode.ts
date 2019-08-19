import { UpdateFunctionCodeInput } from "../shapes/UpdateFunctionCodeInput";
import { UpdateFunctionCodeOutput } from "../shapes/UpdateFunctionCodeOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { CodeStorageExceededException } from "../shapes/CodeStorageExceededException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFunctionCode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFunctionCode",
  http: {
    method: "PUT",
    requestUri: "/2015-03-31/functions/{FunctionName}/code"
  },
  input: {
    shape: UpdateFunctionCodeInput
  },
  output: {
    shape: UpdateFunctionCodeOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: CodeStorageExceededException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
