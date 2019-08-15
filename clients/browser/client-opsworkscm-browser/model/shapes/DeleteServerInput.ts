import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteServerInput: _Structure_ = {
  type: "structure",
  required: ["ServerName"],
  members: {
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
