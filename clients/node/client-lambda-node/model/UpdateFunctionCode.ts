import { UpdateFunctionCodeInput } from "./UpdateFunctionCodeInput";
import { UpdateFunctionCodeOutput } from "./UpdateFunctionCodeOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { CodeStorageExceededException } from "./CodeStorageExceededException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
