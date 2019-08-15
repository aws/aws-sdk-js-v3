import { DescribeActionTargetsInput } from "../shapes/DescribeActionTargetsInput";
import { DescribeActionTargetsOutput } from "../shapes/DescribeActionTargetsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
