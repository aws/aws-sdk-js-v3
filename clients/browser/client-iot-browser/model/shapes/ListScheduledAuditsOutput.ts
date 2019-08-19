import { _ScheduledAuditMetadataList } from "./_ScheduledAuditMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListScheduledAuditsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    scheduledAudits: {
      shape: _ScheduledAuditMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
