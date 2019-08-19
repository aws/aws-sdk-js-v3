import { _StatementListType } from "./_StatementListType";
import { _ContextKeyNamesResultListType } from "./_ContextKeyNamesResultListType";
import { _OrganizationsDecisionDetail } from "./_OrganizationsDecisionDetail";
import { _EvalDecisionDetailsType } from "./_EvalDecisionDetailsType";
import { _ResourceSpecificResultListType } from "./_ResourceSpecificResultListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EvaluationResult: _Structure_ = {
  type: "structure",
  required: ["EvalActionName", "EvalDecision"],
  members: {
    EvalActionName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    EvalResourceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EvalDecision: {
      shape: {
        type: "string"
      }
    },
    MatchedStatements: {
      shape: _StatementListType
    },
    MissingContextValues: {
      shape: _ContextKeyNamesResultListType
    },
    OrganizationsDecisionDetail: {
      shape: _OrganizationsDecisionDetail
    },
    EvalDecisionDetails: {
      shape: _EvalDecisionDetailsType
    },
    ResourceSpecificResults: {
      shape: _ResourceSpecificResultListType
    }
  }
};
