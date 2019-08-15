import { DeleteTranscriptionJobInput } from "../shapes/DeleteTranscriptionJobInput";
import { DeleteTranscriptionJobOutput } from "../shapes/DeleteTranscriptionJobOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
