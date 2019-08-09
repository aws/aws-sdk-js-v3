import { DescribeEntitiesDetectionJobInput } from "./DescribeEntitiesDetectionJobInput";
import { DescribeEntitiesDetectionJobOutput } from "./DescribeEntitiesDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
