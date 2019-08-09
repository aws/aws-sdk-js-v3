import { CreateNotebookInstanceLifecycleConfigInput } from "./CreateNotebookInstanceLifecycleConfigInput";
import { CreateNotebookInstanceLifecycleConfigOutput } from "./CreateNotebookInstanceLifecycleConfigOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateNotebookInstanceLifecycleConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNotebookInstanceLifecycleConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNotebookInstanceLifecycleConfigInput
  },
  output: {
    shape: CreateNotebookInstanceLifecycleConfigOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
