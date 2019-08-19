import { _ComplianceContributorCount } from "./_ComplianceContributorCount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Compliance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceType: {
      shape: {
        type: "string"
      }
    },
    ComplianceContributorCount: {
      shape: _ComplianceContributorCount
    }
  }
};
