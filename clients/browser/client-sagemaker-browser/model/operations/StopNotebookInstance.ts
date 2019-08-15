import { StopNotebookInstanceInput } from "../shapes/StopNotebookInstanceInput";
import { StopNotebookInstanceOutput } from "../shapes/StopNotebookInstanceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopNotebookInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopNotebookInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopNotebookInstanceInput
  },
  output: {
    shape: StopNotebookInstanceOutput
  },
  errors: []
};
