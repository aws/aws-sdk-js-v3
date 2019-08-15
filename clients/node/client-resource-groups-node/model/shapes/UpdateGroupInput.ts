import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "GroupName"
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
