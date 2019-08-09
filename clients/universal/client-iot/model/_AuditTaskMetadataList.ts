import { List as _List_ } from "@aws-sdk/types";
import { _AuditTaskMetadata } from "./_AuditTaskMetadata";

export const _AuditTaskMetadataList: _List_ = {
  type: "list",
  member: {
    shape: _AuditTaskMetadata
  }
};
