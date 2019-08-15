import { ListNotebookInstanceLifecycleConfigsInput } from "../shapes/ListNotebookInstanceLifecycleConfigsInput";
import { ListNotebookInstanceLifecycleConfigsOutput } from "../shapes/ListNotebookInstanceLifecycleConfigsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListNotebookInstanceLifecycleConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNotebookInstanceLifecycleConfigs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListNotebookInstanceLifecycleConfigsInput
  },
  output: {
    shape: ListNotebookInstanceLifecycleConfigsOutput
  },
  errors: []
};
