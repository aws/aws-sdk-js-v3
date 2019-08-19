import { PutActionRevisionInput } from "../shapes/PutActionRevisionInput";
import { PutActionRevisionOutput } from "../shapes/PutActionRevisionOutput";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { StageNotFoundException } from "../shapes/StageNotFoundException";
import { ActionNotFoundException } from "../shapes/ActionNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutActionRevision: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutActionRevision",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutActionRevisionInput
  },
  output: {
    shape: PutActionRevisionOutput
  },
  errors: [
    {
      shape: PipelineNotFoundException
    },
    {
      shape: StageNotFoundException
    },
    {
      shape: ActionNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
