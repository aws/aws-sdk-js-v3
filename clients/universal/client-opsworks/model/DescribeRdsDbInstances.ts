import { DescribeRdsDbInstancesInput } from "./DescribeRdsDbInstancesInput";
import { DescribeRdsDbInstancesOutput } from "./DescribeRdsDbInstancesOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
