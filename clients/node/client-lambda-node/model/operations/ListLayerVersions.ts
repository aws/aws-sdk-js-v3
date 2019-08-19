import { ListLayerVersionsInput } from "../shapes/ListLayerVersionsInput";
import { ListLayerVersionsOutput } from "../shapes/ListLayerVersionsOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLayerVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLayerVersions",
  http: {
    method: "GET",
    requestUri: "/2018-10-31/layers/{LayerName}/versions"
  },
  input: {
    shape: ListLayerVersionsInput
  },
  output: {
    shape: ListLayerVersionsOutput
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
      shape: TooManyRequestsException
    }
  ]
};
