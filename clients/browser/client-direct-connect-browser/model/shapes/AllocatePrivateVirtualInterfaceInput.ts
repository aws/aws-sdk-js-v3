import { _NewPrivateVirtualInterfaceAllocation } from "./_NewPrivateVirtualInterfaceAllocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocatePrivateVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: [
    "connectionId",
    "ownerAccount",
    "newPrivateVirtualInterfaceAllocation"
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
    newPrivateVirtualInterfaceAllocation: {
      shape: _NewPrivateVirtualInterfaceAllocation
    }
  }
};
