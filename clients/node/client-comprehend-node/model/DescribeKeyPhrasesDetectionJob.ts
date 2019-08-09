import { DescribeKeyPhrasesDetectionJobInput } from "./DescribeKeyPhrasesDetectionJobInput";
import { DescribeKeyPhrasesDetectionJobOutput } from "./DescribeKeyPhrasesDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
