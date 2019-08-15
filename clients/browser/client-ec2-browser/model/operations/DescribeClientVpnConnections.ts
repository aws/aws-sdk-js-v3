import { DescribeClientVpnConnectionsInput } from "../shapes/DescribeClientVpnConnectionsInput";
import { DescribeClientVpnConnectionsOutput } from "../shapes/DescribeClientVpnConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClientVpnConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClientVpnConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClientVpnConnectionsInput
  },
  output: {
    shape: DescribeClientVpnConnectionsOutput
  },
  errors: []
};
