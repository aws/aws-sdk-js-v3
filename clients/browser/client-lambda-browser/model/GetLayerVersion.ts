import { GetLayerVersionInput } from "./GetLayerVersionInput";
import { GetLayerVersionOutput } from "./GetLayerVersionOutput";
import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetLayerVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLayerVersion",
  http: {
    method: "GET",
    requestUri: "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}"
  },
  input: {
    shape: GetLayerVersionInput
  },
  output: {
    shape: GetLayerVersionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
