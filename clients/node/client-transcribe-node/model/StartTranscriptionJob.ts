import { StartTranscriptionJobInput } from "./StartTranscriptionJobInput";
import { StartTranscriptionJobOutput } from "./StartTranscriptionJobOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartTranscriptionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartTranscriptionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartTranscriptionJobInput
  },
  output: {
    shape: StartTranscriptionJobOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
