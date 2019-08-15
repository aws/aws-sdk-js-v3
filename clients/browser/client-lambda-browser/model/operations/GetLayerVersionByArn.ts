import { GetLayerVersionByArnInput } from "../shapes/GetLayerVersionByArnInput";
import { GetLayerVersionByArnOutput } from "../shapes/GetLayerVersionByArnOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLayerVersionByArn: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLayerVersionByArn",
  http: {
    method: "GET",
    requestUri: "/2018-10-31/layers?find=LayerVersion"
  },
  input: {
    shape: GetLayerVersionByArnInput
  },
  output: {
    shape: GetLayerVersionByArnOutput
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
