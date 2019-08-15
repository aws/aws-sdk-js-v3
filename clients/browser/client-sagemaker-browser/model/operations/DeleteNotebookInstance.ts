import { DeleteNotebookInstanceInput } from "../shapes/DeleteNotebookInstanceInput";
import { DeleteNotebookInstanceOutput } from "../shapes/DeleteNotebookInstanceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNotebookInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNotebookInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNotebookInstanceInput
  },
  output: {
    shape: DeleteNotebookInstanceOutput
  },
  errors: []
};
