import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConnectionInput: _Structure_ = {
  type: "structure",
  required: ["connectionId"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    }
  }
};
