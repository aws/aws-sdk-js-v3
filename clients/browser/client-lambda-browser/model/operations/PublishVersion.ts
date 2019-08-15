import { PublishVersionInput } from "../shapes/PublishVersionInput";
import { PublishVersionOutput } from "../shapes/PublishVersionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { CodeStorageExceededException } from "../shapes/CodeStorageExceededException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
