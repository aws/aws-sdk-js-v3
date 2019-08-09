import { DeleteTranscriptionJobInput } from "./DeleteTranscriptionJobInput";
import { DeleteTranscriptionJobOutput } from "./DeleteTranscriptionJobOutput";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTranscriptionJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTranscriptionJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTranscriptionJobInput
  },
  output: {
    shape: DeleteTranscriptionJobOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalFailureException
    }
  ]
};
