import { DeleteNotebookInstanceLifecycleConfigInput } from "../shapes/DeleteNotebookInstanceLifecycleConfigInput";
import { DeleteNotebookInstanceLifecycleConfigOutput } from "../shapes/DeleteNotebookInstanceLifecycleConfigOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNotebookInstanceLifecycleConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNotebookInstanceLifecycleConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNotebookInstanceLifecycleConfigInput
  },
  output: {
    shape: DeleteNotebookInstanceLifecycleConfigOutput
  },
  errors: []
};
