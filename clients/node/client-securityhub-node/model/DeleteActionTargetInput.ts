import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteActionTargetInput: _Structure_ = {
  type: "structure",
  required: ["ActionTargetArn"],
  members: {
    ActionTargetArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ActionTargetArn"
    }
  }
};
