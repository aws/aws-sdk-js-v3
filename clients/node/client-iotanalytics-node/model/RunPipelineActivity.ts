import { RunPipelineActivityInput } from "./RunPipelineActivityInput";
import { RunPipelineActivityOutput } from "./RunPipelineActivityOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RunPipelineActivity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RunPipelineActivity",
  http: {
    method: "POST",
    requestUri: "/pipelineactivities/run"
  },
  input: {
    shape: RunPipelineActivityInput
  },
  output: {
    shape: RunPipelineActivityOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
