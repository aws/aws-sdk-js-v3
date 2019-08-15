import { _ComplianceSummariesByResourceType } from "./_ComplianceSummariesByResourceType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceSummaryByResourceTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceSummariesByResourceType: {
      shape: _ComplianceSummariesByResourceType
    }
  }
};
