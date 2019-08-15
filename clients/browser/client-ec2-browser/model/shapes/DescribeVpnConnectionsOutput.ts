import { _VpnConnectionList } from "./_VpnConnectionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpnConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpnConnections: {
      shape: _VpnConnectionList,
      locationName: "vpnConnectionSet"
    }
  }
};
