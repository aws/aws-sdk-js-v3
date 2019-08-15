import { DescribeConstraintInput } from "../shapes/DescribeConstraintInput";
import { DescribeConstraintOutput } from "../shapes/DescribeConstraintOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConstraint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConstraint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConstraintInput
  },
  output: {
    shape: DescribeConstraintOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
