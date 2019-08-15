import { _TaskStatistics } from "./_TaskStatistics";
import { _AuditDetails } from "./_AuditDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAuditTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskStatus: {
      shape: {
        type: "string"
      }
    },
    taskType: {
      shape: {
        type: "string"
      }
    },
    taskStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    taskStatistics: {
      shape: _TaskStatistics
    },
    scheduledAuditName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    auditDetails: {
      shape: _AuditDetails
    }
  }
};
