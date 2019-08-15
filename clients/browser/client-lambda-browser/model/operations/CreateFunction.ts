import { CreateFunctionInput } from "../shapes/CreateFunctionInput";
import { CreateFunctionOutput } from "../shapes/CreateFunctionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { CodeStorageExceededException } from "../shapes/CodeStorageExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFunction",
  http: {
    method: "POST",
    requestUri: "/2015-03-31/functions"
  },
  input: {
    shape: CreateFunctionInput
  },
  output: {
    shape: CreateFunctionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: CodeStorageExceededException
    }
  ]
};
