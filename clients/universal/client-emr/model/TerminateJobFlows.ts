import { TerminateJobFlowsInput } from "./TerminateJobFlowsInput";
import { TerminateJobFlowsOutput } from "./TerminateJobFlowsOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TerminateJobFlows: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateJobFlows",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateJobFlowsInput
  },
  output: {
    shape: TerminateJobFlowsOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
