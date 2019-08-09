import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MappingEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceTable: {
      shape: {
        type: "string"
      }
    },
    SourcePath: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    TargetTable: {
      shape: {
        type: "string"
      }
    },
    TargetPath: {
      shape: {
        type: "string"
      }
    },
    TargetType: {
      shape: {
        type: "string"
      }
    }
  }
};
