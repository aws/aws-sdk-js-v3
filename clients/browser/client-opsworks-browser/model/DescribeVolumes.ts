import { DescribeVolumesInput } from "./DescribeVolumesInput";
import { DescribeVolumesOutput } from "./DescribeVolumesOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
