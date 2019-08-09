import { DescribeAgentVersionsInput } from "./DescribeAgentVersionsInput";
import { DescribeAgentVersionsOutput } from "./DescribeAgentVersionsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
