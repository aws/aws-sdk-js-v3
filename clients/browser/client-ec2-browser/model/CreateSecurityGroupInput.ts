import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["Description", "GroupName"],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "GroupDescription"
    },
    GroupName: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
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
