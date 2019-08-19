import { RunPipelineActivityInput } from "../shapes/RunPipelineActivityInput";
import { RunPipelineActivityOutput } from "../shapes/RunPipelineActivityOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
