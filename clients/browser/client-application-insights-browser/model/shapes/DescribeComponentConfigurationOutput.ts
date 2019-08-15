import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComponentConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Monitor: {
      shape: {
        type: "boolean"
      }
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    ComponentConfiguration: {
      shape: {
        type: "string"
      }
    }
  }
};
