import { StartTranscriptionJobInput } from "../shapes/StartTranscriptionJobInput";
import { StartTranscriptionJobOutput } from "../shapes/StartTranscriptionJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
