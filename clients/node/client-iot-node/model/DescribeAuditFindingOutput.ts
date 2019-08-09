import { _AuditFinding } from "./_AuditFinding";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAuditFindingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    finding: {
      shape: _AuditFinding
    }
  }
};
