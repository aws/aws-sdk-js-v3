import { DescribeEntitiesDetectionJobInput } from "../shapes/DescribeEntitiesDetectionJobInput";
import { DescribeEntitiesDetectionJobOutput } from "../shapes/DescribeEntitiesDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEntitiesDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEntitiesDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEntitiesDetectionJobInput
  },
  output: {
    shape: DescribeEntitiesDetectionJobOutput
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
