import { _NewPublicVirtualInterface } from "./_NewPublicVirtualInterface";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePublicVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["connectionId", "newPublicVirtualInterface"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    newPublicVirtualInterface: {
      shape: _NewPublicVirtualInterface
    }
  }
};
