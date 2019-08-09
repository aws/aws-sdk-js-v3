import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLagInput: _Structure_ = {
  type: "structure",
  required: ["lagId"],
  members: {
    lagId: {
      shape: {
        type: "string"
      }
    }
  }
};
