import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLunaClientOutput: _Structure_ = {
  type: "structure",
  required: ["Status"],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
