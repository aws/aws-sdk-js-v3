import { DeletePipelineInput } from "./DeletePipelineInput";
import { DeletePipelineOutput } from "./DeletePipelineOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePipelineInput
  },
  output: {
    shape: DeletePipelineOutput
  },
  errors: [
    {
      shape: PipelineNotFoundException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
