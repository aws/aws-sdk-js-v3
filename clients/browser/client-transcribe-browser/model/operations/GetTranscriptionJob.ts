import { GetTranscriptionJobInput } from "../shapes/GetTranscriptionJobInput";
import { GetTranscriptionJobOutput } from "../shapes/GetTranscriptionJobOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
