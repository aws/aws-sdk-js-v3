import { DescribeJobExecutionInput } from "../shapes/DescribeJobExecutionInput";
import { DescribeJobExecutionOutput } from "../shapes/DescribeJobExecutionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
