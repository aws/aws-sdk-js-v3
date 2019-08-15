import { CreateNotebookInstanceInput } from "../shapes/CreateNotebookInstanceInput";
import { CreateNotebookInstanceOutput } from "../shapes/CreateNotebookInstanceOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
