import { RebootWorkspacesInput } from "./RebootWorkspacesInput";
import { RebootWorkspacesOutput } from "./RebootWorkspacesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RebootWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootWorkspacesInput
  },
  output: {
    shape: RebootWorkspacesOutput
  },
  errors: []
};
