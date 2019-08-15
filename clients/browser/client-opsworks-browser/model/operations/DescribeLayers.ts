import { DescribeLayersInput } from "../shapes/DescribeLayersInput";
import { DescribeLayersOutput } from "../shapes/DescribeLayersOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLayers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLayers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLayersInput
  },
  output: {
    shape: DescribeLayersOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
