import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminListDevicesInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username"],
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
    Limit: {
      shape: {
        type: "integer"
      }
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
