import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PropertyDifference: _Structure_ = {
  type: "structure",
  required: ["PropertyPath", "ExpectedValue", "ActualValue", "DifferenceType"],
  members: {
    PropertyPath: {
      shape: {
        type: "string"
      }
    },
    ExpectedValue: {
      shape: {
        type: "string"
      }
    },
    ActualValue: {
      shape: {
        type: "string"
      }
    },
    DifferenceType: {
      shape: {
        type: "string"
      }
    }
  }
};
