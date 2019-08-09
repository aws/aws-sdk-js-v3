import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchDimensionConfiguration: _Structure_ = {
  type: "structure",
  required: ["DimensionName", "DimensionValueSource", "DefaultDimensionValue"],
  members: {
    DimensionName: {
      shape: {
        type: "string"
      }
    },
    DimensionValueSource: {
      shape: {
        type: "string"
      }
    },
    DefaultDimensionValue: {
      shape: {
        type: "string"
      }
    }
  }
};
