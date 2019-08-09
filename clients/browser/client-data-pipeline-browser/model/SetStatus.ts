import { SetStatusInput } from "./SetStatusInput";
import { SetStatusOutput } from "./SetStatusOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetStatusInput
  },
  output: {
    shape: SetStatusOutput
  },
  errors: [
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
