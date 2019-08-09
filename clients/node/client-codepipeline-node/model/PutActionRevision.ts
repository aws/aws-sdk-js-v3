import { PutActionRevisionInput } from "./PutActionRevisionInput";
import { PutActionRevisionOutput } from "./PutActionRevisionOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { ActionNotFoundException } from "./ActionNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
