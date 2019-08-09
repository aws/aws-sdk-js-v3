import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDocumentPermissionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "PermissionType"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    PermissionType: {
      shape: {
        type: "string"
      }
    }
  }
};
