import { _EvaluationResults } from "./_EvaluationResults";
import { _IssueInfoMap } from "./_IssueInfoMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyComplianceStatus: _Structure_ = {
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
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberAccount: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EvaluationResults: {
      shape: _EvaluationResults
    },
    LastUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    IssueInfoMap: {
      shape: _IssueInfoMap
    }
  }
};
