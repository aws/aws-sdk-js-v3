import { DescribeJobInput } from "./DescribeJobInput";
import { DescribeJobOutput } from "./DescribeJobOutput";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
