import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeClientVpnIngressInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "TargetNetworkCidr"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    TargetNetworkCidr: {
      shape: {
        type: "string"
      }
    },
    AccessGroupId: {
      shape: {
        type: "string"
      }
    },
    RevokeAllGroups: {
      shape: {
        type: "boolean"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
