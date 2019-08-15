import { DescribeVpnConnectionsInput } from "../shapes/DescribeVpnConnectionsInput";
import { DescribeVpnConnectionsOutput } from "../shapes/DescribeVpnConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpnConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpnConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpnConnectionsInput
  },
  output: {
    shape: DescribeVpnConnectionsOutput
  },
  errors: []
};
