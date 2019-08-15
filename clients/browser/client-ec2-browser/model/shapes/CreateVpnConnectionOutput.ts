import { _VpnConnection } from "./_VpnConnection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpnConnectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpnConnection: {
      shape: _VpnConnection,
      locationName: "vpnConnection"
    }
  }
};
