import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateClientVpnTargetNetworkInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "SubnetId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
