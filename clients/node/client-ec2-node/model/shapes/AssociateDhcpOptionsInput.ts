import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDhcpOptionsInput: _Structure_ = {
  type: "structure",
  required: ["DhcpOptionsId", "VpcId"],
  members: {
    DhcpOptionsId: {
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
