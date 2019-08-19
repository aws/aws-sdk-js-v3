import { StopWorkspacesInput } from "../shapes/StopWorkspacesInput";
import { StopWorkspacesOutput } from "../shapes/StopWorkspacesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopWorkspacesInput
  },
  output: {
    shape: StopWorkspacesOutput
  },
  errors: []
};
