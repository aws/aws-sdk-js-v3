import { _AuditFindings } from "./_AuditFindings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAuditFindingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    findings: {
      shape: _AuditFindings
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
