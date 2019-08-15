import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopActivityStreamInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    }
  }
};
