import { GetLayerVersionInput } from "../shapes/GetLayerVersionInput";
import { GetLayerVersionOutput } from "../shapes/GetLayerVersionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
