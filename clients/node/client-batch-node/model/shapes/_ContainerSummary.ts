import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exitCode: {
      shape: {
        type: "integer"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    }
  }
};
