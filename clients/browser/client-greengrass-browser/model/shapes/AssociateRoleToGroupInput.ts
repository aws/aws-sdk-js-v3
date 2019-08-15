import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateRoleToGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupId", "RoleArn"],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
