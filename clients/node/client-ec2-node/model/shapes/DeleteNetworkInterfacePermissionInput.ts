import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteNetworkInterfacePermissionInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfacePermissionId"],
  members: {
    NetworkInterfacePermissionId: {
      shape: {
        type: "string"
      }
    },
    Force: {
      shape: {
        type: "boolean"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
