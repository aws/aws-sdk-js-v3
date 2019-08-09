import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TextOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    SourceField: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ReturnEnabled: {
      shape: {
        type: "boolean"
      }
    },
    SortEnabled: {
      shape: {
        type: "boolean"
      }
    },
    HighlightEnabled: {
      shape: {
        type: "boolean"
      }
    },
    AnalysisScheme: {
      shape: {
        type: "string"
      }
    }
  }
};
