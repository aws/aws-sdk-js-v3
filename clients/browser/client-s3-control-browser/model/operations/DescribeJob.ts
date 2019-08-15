import { DescribeJobInput } from "../shapes/DescribeJobInput";
import { DescribeJobOutput } from "../shapes/DescribeJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJob",
  http: {
    method: "GET",
    requestUri: "/v20180820/jobs/{id}"
  },
  input: {
    shape: DescribeJobInput
  },
  output: {
    shape: DescribeJobOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
