import { DescribeRaidArraysInput } from "./DescribeRaidArraysInput";
import { DescribeRaidArraysOutput } from "./DescribeRaidArraysOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
