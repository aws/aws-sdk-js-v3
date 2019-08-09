import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["virtualInterfaceId"],
  members: {
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    }
  }
};
