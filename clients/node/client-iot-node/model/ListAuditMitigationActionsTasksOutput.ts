import { _AuditMitigationActionsTaskMetadataList } from "./_AuditMitigationActionsTaskMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditMitigationActionsTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tasks: {
      shape: _AuditMitigationActionsTaskMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
