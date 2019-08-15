import { _NewPublicVirtualInterfaceAllocation } from "./_NewPublicVirtualInterfaceAllocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocatePublicVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: [
    "connectionId",
    "ownerAccount",
    "newPublicVirtualInterfaceAllocation"
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
    newPublicVirtualInterfaceAllocation: {
      shape: _NewPublicVirtualInterfaceAllocation
    }
  }
};
