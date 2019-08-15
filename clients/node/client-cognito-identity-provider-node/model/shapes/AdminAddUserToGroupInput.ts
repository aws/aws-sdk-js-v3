import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminAddUserToGroupInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username", "GroupName"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
