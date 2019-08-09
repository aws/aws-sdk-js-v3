import { DescribeSentimentDetectionJobInput } from "./DescribeSentimentDetectionJobInput";
import { DescribeSentimentDetectionJobOutput } from "./DescribeSentimentDetectionJobOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { JobNotFoundException } from "./JobNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
