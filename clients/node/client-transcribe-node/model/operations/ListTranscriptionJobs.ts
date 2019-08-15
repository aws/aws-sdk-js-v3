import { ListTranscriptionJobsInput } from "../shapes/ListTranscriptionJobsInput";
import { ListTranscriptionJobsOutput } from "../shapes/ListTranscriptionJobsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTranscriptionJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTranscriptionJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTranscriptionJobsInput
  },
  output: {
    shape: ListTranscriptionJobsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    }
  ]
};
