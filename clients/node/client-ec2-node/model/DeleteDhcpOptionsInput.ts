import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDhcpOptionsInput: _Structure_ = {
  type: "structure",
  required: ["DhcpOptionsId"],
  members: {
    DhcpOptionsId: {
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
