import { _AuditMitigationActionExecutionMetadataList } from "./_AuditMitigationActionExecutionMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditMitigationActionsExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionsExecutions: {
      shape: _AuditMitigationActionExecutionMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
