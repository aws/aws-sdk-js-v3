import { DescribeSentimentDetectionJobInput } from "../shapes/DescribeSentimentDetectionJobInput";
import { DescribeSentimentDetectionJobOutput } from "../shapes/DescribeSentimentDetectionJobOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { JobNotFoundException } from "../shapes/JobNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSentimentDetectionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSentimentDetectionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSentimentDetectionJobInput
  },
  output: {
    shape: DescribeSentimentDetectionJobOutput
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
