import { CreateNotebookInstanceInput } from "./CreateNotebookInstanceInput";
import { CreateNotebookInstanceOutput } from "./CreateNotebookInstanceOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateNotebookInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNotebookInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNotebookInstanceInput
  },
  output: {
    shape: CreateNotebookInstanceOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
