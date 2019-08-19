import { ListLayersInput } from "../shapes/ListLayersInput";
import { ListLayersOutput } from "../shapes/ListLayersOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLayers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLayers",
  http: {
    method: "GET",
    requestUri: "/2018-10-31/layers"
  },
  input: {
    shape: ListLayersInput
  },
  output: {
    shape: ListLayersOutput
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
    }
  ]
};
