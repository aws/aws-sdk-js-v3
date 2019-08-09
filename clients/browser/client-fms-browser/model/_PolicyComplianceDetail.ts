import { _ComplianceViolators } from "./_ComplianceViolators";
import { _IssueInfoMap } from "./_IssueInfoMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyComplianceDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyOwner: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    MemberAccount: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Violators: {
      shape: _ComplianceViolators
    },
    EvaluationLimitExceeded: {
      shape: {
        type: "boolean"
      }
    },
    ExpiredAt: {
      shape: {
        type: "timestamp"
      }
    },
    IssueInfoMap: {
      shape: _IssueInfoMap
    }
  }
};
