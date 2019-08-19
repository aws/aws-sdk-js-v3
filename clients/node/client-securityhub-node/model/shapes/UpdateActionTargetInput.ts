import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateActionTargetInput: _Structure_ = {
  type: "structure",
  required: ["ActionTargetArn"],
  members: {
    ActionTargetArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ActionTargetArn"
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
