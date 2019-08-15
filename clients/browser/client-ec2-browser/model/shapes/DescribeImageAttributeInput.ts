import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImageAttributeInput: _Structure_ = {
  type: "structure",
  required: ["Attribute", "ImageId"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    ImageId: {
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
