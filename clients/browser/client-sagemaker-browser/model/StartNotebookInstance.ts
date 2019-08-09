import { StartNotebookInstanceInput } from "./StartNotebookInstanceInput";
import { StartNotebookInstanceOutput } from "./StartNotebookInstanceOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartNotebookInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartNotebookInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartNotebookInstanceInput
  },
  output: {
    shape: StartNotebookInstanceOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
