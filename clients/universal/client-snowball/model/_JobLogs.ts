import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobLogs: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobCompletionReportURI: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobSuccessLogURI: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobFailureLogURI: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
