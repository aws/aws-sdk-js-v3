import { UpdateNotebookInstanceLifecycleConfigInput } from "../shapes/UpdateNotebookInstanceLifecycleConfigInput";
import { UpdateNotebookInstanceLifecycleConfigOutput } from "../shapes/UpdateNotebookInstanceLifecycleConfigOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
