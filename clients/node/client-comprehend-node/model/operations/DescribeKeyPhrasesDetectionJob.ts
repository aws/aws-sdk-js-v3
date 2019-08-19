import { DescribeKeyPhrasesDetectionJobInput } from "../shapes/DescribeKeyPhrasesDetectionJobInput";
import { DescribeKeyPhrasesDetectionJobOutput } from "../shapes/DescribeKeyPhrasesDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeKeyPhrasesDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeKeyPhrasesDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeKeyPhrasesDetectionJobInput
  },
  output: {
    shape: DescribeKeyPhrasesDetectionJobOutput
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
