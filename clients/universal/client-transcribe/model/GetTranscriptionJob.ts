import { GetTranscriptionJobInput } from "./GetTranscriptionJobInput";
import { GetTranscriptionJobOutput } from "./GetTranscriptionJobOutput";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTranscriptionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTranscriptionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTranscriptionJobInput
  },
  output: {
    shape: GetTranscriptionJobOutput
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
      shape: NotFoundException
    }
  ]
};
