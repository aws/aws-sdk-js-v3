import { PublishLayerVersionInput } from "../shapes/PublishLayerVersionInput";
import { PublishLayerVersionOutput } from "../shapes/PublishLayerVersionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { CodeStorageExceededException } from "../shapes/CodeStorageExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
