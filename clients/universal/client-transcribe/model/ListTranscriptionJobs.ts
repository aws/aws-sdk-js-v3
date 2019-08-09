import { ListTranscriptionJobsInput } from "./ListTranscriptionJobsInput";
import { ListTranscriptionJobsOutput } from "./ListTranscriptionJobsOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
