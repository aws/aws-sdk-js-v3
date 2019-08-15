import { _AuditMitigationActionsTaskStatistics } from "./_AuditMitigationActionsTaskStatistics";
import { _AuditMitigationActionsTaskTarget } from "./_AuditMitigationActionsTaskTarget";
import { _AuditCheckToActionsMapping } from "./_AuditCheckToActionsMapping";
import { _MitigationActionList } from "./_MitigationActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAuditMitigationActionsTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskStatus: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    taskStatistics: {
      shape: _AuditMitigationActionsTaskStatistics
    },
    target: {
      shape: _AuditMitigationActionsTaskTarget
    },
    auditCheckToActionsMapping: {
      shape: _AuditCheckToActionsMapping
    },
    actionsDefinition: {
      shape: _MitigationActionList
    }
  }
};
