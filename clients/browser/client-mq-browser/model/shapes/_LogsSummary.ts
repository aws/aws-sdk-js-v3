import { _PendingLogs } from "./_PendingLogs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogsSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Audit: {
      shape: {
        type: "boolean"
      },
      locationName: "audit"
    },
    AuditLogGroup: {
      shape: {
        type: "string"
      },
      locationName: "auditLogGroup"
    },
    General: {
      shape: {
        type: "boolean"
      },
      locationName: "general"
    },
    GeneralLogGroup: {
      shape: {
        type: "string"
      },
      locationName: "generalLogGroup"
    },
    Pending: {
      shape: _PendingLogs,
      locationName: "pending"
    }
  }
};
