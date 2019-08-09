import { UpdateNotebookInstanceLifecycleConfigInput } from "./UpdateNotebookInstanceLifecycleConfigInput";
import { UpdateNotebookInstanceLifecycleConfigOutput } from "./UpdateNotebookInstanceLifecycleConfigOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateNotebookInstanceLifecycleConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateNotebookInstanceLifecycleConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateNotebookInstanceLifecycleConfigInput
  },
  output: {
    shape: UpdateNotebookInstanceLifecycleConfigOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
