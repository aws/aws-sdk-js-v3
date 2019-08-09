import { RebuildWorkspacesInput } from "./RebuildWorkspacesInput";
import { RebuildWorkspacesOutput } from "./RebuildWorkspacesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RebuildWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebuildWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebuildWorkspacesInput
  },
  output: {
    shape: RebuildWorkspacesOutput
  },
  errors: []
};
