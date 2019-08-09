import { GetLayerVersionByArnInput } from "./GetLayerVersionByArnInput";
import { GetLayerVersionByArnOutput } from "./GetLayerVersionByArnOutput";
import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
