import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceBuildInformation: _Structure_ = {
  type: "structure",
  required: ["SourceType", "SourceRepository", "SourceLocation"],
  members: {
    SourceType: {
      shape: {
        type: "string"
      }
    },
    SourceRepository: {
      shape: {
        type: "string"
      }
    },
    SourceLocation: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
