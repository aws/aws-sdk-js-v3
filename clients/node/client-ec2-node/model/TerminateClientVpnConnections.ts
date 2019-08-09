import { TerminateClientVpnConnectionsInput } from "./TerminateClientVpnConnectionsInput";
import { TerminateClientVpnConnectionsOutput } from "./TerminateClientVpnConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TerminateClientVpnConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateClientVpnConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateClientVpnConnectionsInput
  },
  output: {
    shape: TerminateClientVpnConnectionsOutput
  },
  errors: []
};
