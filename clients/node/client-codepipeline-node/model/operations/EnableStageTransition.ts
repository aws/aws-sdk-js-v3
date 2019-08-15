import { EnableStageTransitionInput } from "../shapes/EnableStageTransitionInput";
import { EnableStageTransitionOutput } from "../shapes/EnableStageTransitionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { StageNotFoundException } from "../shapes/StageNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
