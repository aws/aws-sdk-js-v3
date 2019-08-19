import { _VpnGateway } from "./_VpnGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpnGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpnGateway: {
      shape: _VpnGateway,
      locationName: "vpnGateway"
    }
  }
};
