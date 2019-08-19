import { _FindingIds } from "./_FindingIds";
import { _AuditCheckToReasonCodeFilter } from "./_AuditCheckToReasonCodeFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditMitigationActionsTaskTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    auditTaskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    findingIds: {
      shape: _FindingIds
    },
    auditCheckToReasonCodeFilter: {
      shape: _AuditCheckToReasonCodeFilter
    }
  }
};
