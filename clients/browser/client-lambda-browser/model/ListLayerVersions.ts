import { ListLayerVersionsInput } from "./ListLayerVersionsInput";
import { ListLayerVersionsOutput } from "./ListLayerVersionsOutput";
import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
