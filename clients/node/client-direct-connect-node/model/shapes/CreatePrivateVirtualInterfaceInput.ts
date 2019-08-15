import { _NewPrivateVirtualInterface } from "./_NewPrivateVirtualInterface";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePrivateVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["connectionId", "newPrivateVirtualInterface"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    newPrivateVirtualInterface: {
      shape: _NewPrivateVirtualInterface
    }
  }
};
