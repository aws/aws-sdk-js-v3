import { List as _List_ } from "@aws-sdk/types";
import { _AuditFinding } from "./_AuditFinding";

export const _AuditFindings: _List_ = {
  type: "list",
  member: {
    shape: _AuditFinding
  }
};
