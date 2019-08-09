import { AddJobFlowStepsInput } from "./AddJobFlowStepsInput";
import { AddJobFlowStepsOutput } from "./AddJobFlowStepsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddJobFlowSteps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddJobFlowSteps",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddJobFlowStepsInput
  },
  output: {
    shape: AddJobFlowStepsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
