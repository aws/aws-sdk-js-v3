import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditCheckDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    checkRunStatus: {
      shape: {
        type: "string"
      }
    },
    checkCompliant: {
      shape: {
        type: "boolean"
      }
    },
    totalResourcesCount: {
      shape: {
        type: "integer"
      }
    },
    nonCompliantResourcesCount: {
      shape: {
        type: "integer"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
