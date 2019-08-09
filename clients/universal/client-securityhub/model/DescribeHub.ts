import { DescribeHubInput } from "./DescribeHubInput";
import { DescribeHubOutput } from "./DescribeHubOutput";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
