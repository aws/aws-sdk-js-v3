import { DescribeAgentVersionsInput } from "../shapes/DescribeAgentVersionsInput";
import { DescribeAgentVersionsOutput } from "../shapes/DescribeAgentVersionsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAgentVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAgentVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAgentVersionsInput
  },
  output: {
    shape: DescribeAgentVersionsOutput
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
