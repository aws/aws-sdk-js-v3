import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEnvironmentMembershipInput: _Structure_ = {
  type: "structure",
  required: ["environmentId", "userArn", "permissions"],
  members: {
    environmentId: {
      shape: {
        type: "string"
      }
    },
    userArn: {
      shape: {
        type: "string"
      }
    },
    permissions: {
      shape: {
        type: "string"
      }
    }
  }
};
