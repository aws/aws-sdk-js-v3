import { DescribeHubInput } from "../shapes/DescribeHubInput";
import { DescribeHubOutput } from "../shapes/DescribeHubOutput";
import { InternalException } from "../shapes/InternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeHub: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHub",
  http: {
    method: "GET",
    requestUri: "/accounts"
  },
  input: {
    shape: DescribeHubInput
  },
  output: {
    shape: DescribeHubOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
