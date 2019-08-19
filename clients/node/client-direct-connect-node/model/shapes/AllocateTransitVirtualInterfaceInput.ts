import { _NewTransitVirtualInterfaceAllocation } from "./_NewTransitVirtualInterfaceAllocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateTransitVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: [
    "connectionId",
    "ownerAccount",
    "newTransitVirtualInterfaceAllocation"
  ],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    newTransitVirtualInterfaceAllocation: {
      shape: _NewTransitVirtualInterfaceAllocation
    }
  }
};
