import { _AssociationStatus } from "./_AssociationStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateClientVpnTargetNetworkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
    Status: {
      shape: _AssociationStatus,
      locationName: "status"
    }
  }
};
