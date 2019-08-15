import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptReservedNodeExchangeInput: _Structure_ = {
  type: "structure",
  required: ["ReservedNodeId", "TargetReservedNodeOfferingId"],
  members: {
    ReservedNodeId: {
      shape: {
        type: "string"
      }
    },
    TargetReservedNodeOfferingId: {
      shape: {
        type: "string"
      }
    }
  }
};
