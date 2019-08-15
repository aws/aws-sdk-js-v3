import { RunJobFlowInput } from "../shapes/RunJobFlowInput";
import { RunJobFlowOutput } from "../shapes/RunJobFlowOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RunJobFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RunJobFlow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RunJobFlowInput
  },
  output: {
    shape: RunJobFlowOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
