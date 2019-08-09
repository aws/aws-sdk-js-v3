import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkInterfacePermissionInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId", "Permission"],
  members: {
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    AwsAccountId: {
      shape: {
        type: "string"
      }
    },
    AwsService: {
      shape: {
        type: "string"
      }
    },
    Permission: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
