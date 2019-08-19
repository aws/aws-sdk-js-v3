import { TerminateWorkspacesInput } from "../shapes/TerminateWorkspacesInput";
import { TerminateWorkspacesOutput } from "../shapes/TerminateWorkspacesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TerminateWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateWorkspacesInput
  },
  output: {
    shape: TerminateWorkspacesOutput
  },
  errors: []
};
