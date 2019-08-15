import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteImageBuilderInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
