import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TextArrayOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    SourceFields: {
      shape: {
        type: "string"
      }
    },
    ReturnEnabled: {
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
