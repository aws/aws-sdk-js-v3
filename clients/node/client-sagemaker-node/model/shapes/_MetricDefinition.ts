import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricDefinition: _Structure_ = {
  type: "structure",
  required: ["Name", "Regex"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Regex: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
