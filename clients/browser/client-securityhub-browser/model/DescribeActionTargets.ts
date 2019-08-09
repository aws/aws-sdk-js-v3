import { DescribeActionTargetsInput } from "./DescribeActionTargetsInput";
import { DescribeActionTargetsOutput } from "./DescribeActionTargetsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeActionTargets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeActionTargets",
  http: {
    method: "POST",
    requestUri: "/actionTargets/get"
  },
  input: {
    shape: DescribeActionTargetsInput
  },
  output: {
    shape: DescribeActionTargetsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
