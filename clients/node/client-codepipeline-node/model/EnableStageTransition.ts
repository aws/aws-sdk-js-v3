import { EnableStageTransitionInput } from "./EnableStageTransitionInput";
import { EnableStageTransitionOutput } from "./EnableStageTransitionOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableStageTransition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableStageTransition",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableStageTransitionInput
  },
  output: {
    shape: EnableStageTransitionOutput
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
