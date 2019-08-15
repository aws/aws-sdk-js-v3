import { CreatePresignedNotebookInstanceUrlInput } from "../shapes/CreatePresignedNotebookInstanceUrlInput";
import { CreatePresignedNotebookInstanceUrlOutput } from "../shapes/CreatePresignedNotebookInstanceUrlOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePresignedNotebookInstanceUrl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePresignedNotebookInstanceUrl",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePresignedNotebookInstanceUrlInput
  },
  output: {
    shape: CreatePresignedNotebookInstanceUrlOutput
  },
  errors: []
};
