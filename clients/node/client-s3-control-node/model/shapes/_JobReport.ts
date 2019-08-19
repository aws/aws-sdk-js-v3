import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobReport: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Bucket: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Prefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ReportScope: {
      shape: {
        type: "string"
      }
    }
  }
};
