import { StopTrainingJobInput } from "./StopTrainingJobInput";
import { StopTrainingJobOutput } from "./StopTrainingJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopTrainingJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopTrainingJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopTrainingJobInput
  },
  output: {
    shape: StopTrainingJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
