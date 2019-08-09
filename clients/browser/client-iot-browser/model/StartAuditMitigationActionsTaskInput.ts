import { _AuditMitigationActionsTaskTarget } from "./_AuditMitigationActionsTaskTarget";
import { _AuditCheckToActionsMapping } from "./_AuditCheckToActionsMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartAuditMitigationActionsTaskInput: _Structure_ = {
  type: "structure",
  required: [
    "taskId",
    "target",
    "auditCheckToActionsMapping",
    "clientRequestToken"
  ],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "taskId"
    },
    target: {
      shape: _AuditMitigationActionsTaskTarget
    },
    auditCheckToActionsMapping: {
      shape: _AuditCheckToActionsMapping
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
