import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcAttributeInput: _Structure_ = {
  type: "structure",
  required: ["Attribute", "VpcId"],
  members: {
    Attribute: {
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
