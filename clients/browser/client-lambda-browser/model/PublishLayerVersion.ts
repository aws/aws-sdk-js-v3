import { PublishLayerVersionInput } from "./PublishLayerVersionInput";
import { PublishLayerVersionOutput } from "./PublishLayerVersionOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { CodeStorageExceededException } from "./CodeStorageExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PublishLayerVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PublishLayerVersion",
  http: {
    method: "POST",
    requestUri: "/2018-10-31/layers/{LayerName}/versions"
  },
  input: {
    shape: PublishLayerVersionInput
  },
  output: {
    shape: PublishLayerVersionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: CodeStorageExceededException
    }
  ]
};
