import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupId: {
      shape: {
        type: "string"
      }
    },
    GroupName: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
