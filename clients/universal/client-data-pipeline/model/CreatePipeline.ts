import { CreatePipelineInput } from "./CreatePipelineInput";
import { CreatePipelineOutput } from "./CreatePipelineOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePipelineInput
  },
  output: {
    shape: CreatePipelineOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
