import { DescribeTopicsDetectionJobInput } from "../shapes/DescribeTopicsDetectionJobInput";
import { DescribeTopicsDetectionJobOutput } from "../shapes/DescribeTopicsDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTopicsDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTopicsDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTopicsDetectionJobInput
  },
  output: {
    shape: DescribeTopicsDetectionJobOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: JobNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerException
    }
  ]
};
