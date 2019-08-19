import { CreatePipelineInput } from "../shapes/CreatePipelineInput";
import { CreatePipelineOutput } from "../shapes/CreatePipelineOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
