import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminListGroupsForUserInput: _Structure_ = {
  type: "structure",
  required: ["Username", "UserPoolId"],
  members: {
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
