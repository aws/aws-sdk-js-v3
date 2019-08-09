import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpnTunnelOptionsSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TunnelInsideCidr: {
      shape: {
        type: "string"
      }
    },
    PreSharedKey: {
      shape: {
        type: "string"
      }
    }
  }
};
