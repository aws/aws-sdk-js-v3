import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateClientVpnTargetNetworkInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "AssociationId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    AssociationId: {
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
