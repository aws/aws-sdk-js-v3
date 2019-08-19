import { StartNotebookInstanceInput } from "../shapes/StartNotebookInstanceInput";
import { StartNotebookInstanceOutput } from "../shapes/StartNotebookInstanceOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
