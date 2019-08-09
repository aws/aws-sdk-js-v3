import { StartWorkspacesInput } from "./StartWorkspacesInput";
import { StartWorkspacesOutput } from "./StartWorkspacesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartWorkspacesInput
  },
  output: {
    shape: StartWorkspacesOutput
  },
  errors: []
};
