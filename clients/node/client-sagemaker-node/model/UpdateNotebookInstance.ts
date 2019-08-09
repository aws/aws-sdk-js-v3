import { UpdateNotebookInstanceInput } from "./UpdateNotebookInstanceInput";
import { UpdateNotebookInstanceOutput } from "./UpdateNotebookInstanceOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateNotebookInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNotebookInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNotebookInstanceInput
  },
  output: {
    shape: UpdateNotebookInstanceOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
