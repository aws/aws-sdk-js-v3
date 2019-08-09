import { _ComplianceSummary } from "./_ComplianceSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceSummaryByResourceType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
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
