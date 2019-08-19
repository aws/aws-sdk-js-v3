import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualNodeServiceProvider: _Structure_ = {
  type: "structure",
  required: ["virtualNodeName"],
  members: {
    virtualNodeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
