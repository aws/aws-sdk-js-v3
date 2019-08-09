import { DescribeJobExecutionInput } from "./DescribeJobExecutionInput";
import { DescribeJobExecutionOutput } from "./DescribeJobExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeJobExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJobExecution",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}/jobs/{jobId}"
  },
  input: {
    shape: DescribeJobExecutionInput
  },
  output: {
    shape: DescribeJobExecutionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
