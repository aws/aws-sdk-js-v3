import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledAuditMetadata } from "./_ScheduledAuditMetadata";

export const _ScheduledAuditMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledAuditMetadata
  }
};
