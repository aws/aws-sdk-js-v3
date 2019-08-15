import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumeAttributeInput: _Structure_ = {
  type: "structure",
  required: ["Attribute", "VolumeId"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    VolumeId: {
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
