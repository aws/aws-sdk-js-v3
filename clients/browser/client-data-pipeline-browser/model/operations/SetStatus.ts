import { SetStatusInput } from "../shapes/SetStatusInput";
import { SetStatusOutput } from "../shapes/SetStatusOutput";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
