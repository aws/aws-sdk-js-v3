import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArtifactDetails: _Structure_ = {
  type: "structure",
  required: ["minimumCount", "maximumCount"],
  members: {
    minimumCount: {
      shape: {
        type: "integer"
      }
    },
    maximumCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
