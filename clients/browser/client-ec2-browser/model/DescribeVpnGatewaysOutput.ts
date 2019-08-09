import { _VpnGatewayList } from "./_VpnGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpnGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpnGateways: {
      shape: _VpnGatewayList,
      locationName: "vpnGatewaySet"
    }
  }
};
