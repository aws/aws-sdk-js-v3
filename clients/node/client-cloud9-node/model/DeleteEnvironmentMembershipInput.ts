import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEnvironmentMembershipInput: _Structure_ = {
  type: "structure",
  required: ["environmentId", "userArn"],
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
    }
  }
};
