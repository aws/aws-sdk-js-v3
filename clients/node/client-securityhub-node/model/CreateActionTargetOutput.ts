import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateActionTargetOutput: _Structure_ = {
  type: "structure",
  required: ["ActionTargetArn"],
  members: {
    ActionTargetArn: {
      shape: {
        type: "string"
      }
    }
  }
};
