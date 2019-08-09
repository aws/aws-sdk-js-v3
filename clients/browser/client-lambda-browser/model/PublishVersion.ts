import { PublishVersionInput } from "./PublishVersionInput";
import { PublishVersionOutput } from "./PublishVersionOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { CodeStorageExceededException } from "./CodeStorageExceededException";
import { PreconditionFailedException } from "./PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PublishVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PublishVersion",
  http: {
    method: "POST",
    requestUri: "/2015-03-31/functions/{FunctionName}/versions"
  },
  input: {
    shape: PublishVersionInput
  },
  output: {
    shape: PublishVersionOutput
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
