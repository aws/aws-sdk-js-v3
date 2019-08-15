import { _NewTransitVirtualInterface } from "./_NewTransitVirtualInterface";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitVirtualInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["connectionId", "newTransitVirtualInterface"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    newTransitVirtualInterface: {
      shape: _NewTransitVirtualInterface
    }
  }
};
