import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationSummary: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "ApplicationARN",
    "ApplicationStatus",
    "ApplicationVersionId",
    "RuntimeEnvironment"
  ],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationStatus: {
      shape: {
        type: "string"
      }
    },
    ApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    RuntimeEnvironment: {
      shape: {
        type: "string"
      }
    }
  }
};
