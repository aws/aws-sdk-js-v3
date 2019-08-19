import { DescribeRaidArraysInput } from "../shapes/DescribeRaidArraysInput";
import { DescribeRaidArraysOutput } from "../shapes/DescribeRaidArraysOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRaidArrays: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRaidArrays",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRaidArraysInput
  },
  output: {
    shape: DescribeRaidArraysOutput
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
