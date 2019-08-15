import { DescribeRdsDbInstancesInput } from "../shapes/DescribeRdsDbInstancesInput";
import { DescribeRdsDbInstancesOutput } from "../shapes/DescribeRdsDbInstancesOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRdsDbInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRdsDbInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRdsDbInstancesInput
  },
  output: {
    shape: DescribeRdsDbInstancesOutput
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
