import { DescribeTopicsDetectionJobInput } from "./DescribeTopicsDetectionJobInput";
import { DescribeTopicsDetectionJobOutput } from "./DescribeTopicsDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
