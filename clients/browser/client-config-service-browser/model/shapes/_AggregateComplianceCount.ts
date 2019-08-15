import { _ComplianceSummary } from "./_ComplianceSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AggregateComplianceCount: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceSummary: {
      shape: _ComplianceSummary
    }
  }
};
