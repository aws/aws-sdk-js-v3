import { DescribeJobInput } from "./DescribeJobInput";
import { DescribeJobOutput } from "./DescribeJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJob",
  http: {
    method: "GET",
    requestUri: "/jobs/{jobId}"
  },
  input: {
    shape: DescribeJobInput
  },
  output: {
    shape: DescribeJobOutput
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
