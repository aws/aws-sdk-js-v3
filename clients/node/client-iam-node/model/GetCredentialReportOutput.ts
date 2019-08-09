import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCredentialReportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Content: {
      shape: {
        type: "blob"
      }
    },
    ReportFormat: {
      shape: {
        type: "string"
      }
    },
    GeneratedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
