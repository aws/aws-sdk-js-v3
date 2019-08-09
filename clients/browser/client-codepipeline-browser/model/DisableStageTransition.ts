import { DisableStageTransitionInput } from "./DisableStageTransitionInput";
import { DisableStageTransitionOutput } from "./DisableStageTransitionOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableStageTransition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableStageTransition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableStageTransitionInput
  },
  output: {
    shape: DisableStageTransitionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: StageNotFoundException
    }
  ]
};
