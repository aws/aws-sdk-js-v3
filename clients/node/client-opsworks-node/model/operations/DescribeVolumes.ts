import { DescribeVolumesInput } from "../shapes/DescribeVolumesInput";
import { DescribeVolumesOutput } from "../shapes/DescribeVolumesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVolumes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVolumes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVolumesInput
  },
  output: {
    shape: DescribeVolumesOutput
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
