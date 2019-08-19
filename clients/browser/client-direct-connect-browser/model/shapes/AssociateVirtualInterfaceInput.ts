import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["virtualInterfaceId", "connectionId"],
  members: {
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    connectionId: {
      shape: {
        type: "string"
      }
    }
  }
};
