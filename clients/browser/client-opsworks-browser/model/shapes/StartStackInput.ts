import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartStackInput: _Structure_ = {
  type: "structure",
  required: ["StackId"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    }
  }
};
