import { DescribeLayersInput } from "./DescribeLayersInput";
import { DescribeLayersOutput } from "./DescribeLayersOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
