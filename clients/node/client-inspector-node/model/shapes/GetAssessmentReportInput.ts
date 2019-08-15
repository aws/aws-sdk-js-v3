import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAssessmentReportInput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArn", "reportFileFormat", "reportType"],
  members: {
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    reportFileFormat: {
      shape: {
        type: "string"
      }
    },
    reportType: {
      shape: {
        type: "string"
      }
    }
  }
};
