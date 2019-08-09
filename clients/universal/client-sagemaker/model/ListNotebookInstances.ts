import { ListNotebookInstancesInput } from "./ListNotebookInstancesInput";
import { ListNotebookInstancesOutput } from "./ListNotebookInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListNotebookInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListNotebookInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListNotebookInstancesInput
  },
  output: {
    shape: ListNotebookInstancesOutput
  },
  errors: []
};
