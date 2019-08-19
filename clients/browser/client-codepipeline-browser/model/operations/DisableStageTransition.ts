import { DisableStageTransitionInput } from "../shapes/DisableStageTransitionInput";
import { DisableStageTransitionOutput } from "../shapes/DisableStageTransitionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { StageNotFoundException } from "../shapes/StageNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
