import { _StatementListType } from "./_StatementListType";
import { _ContextKeyNamesResultListType } from "./_ContextKeyNamesResultListType";
import { _EvalDecisionDetailsType } from "./_EvalDecisionDetailsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceSpecificResult: _Structure_ = {
  type: "structure",
  required: ["EvalResourceName", "EvalResourceDecision"],
  members: {
    EvalResourceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EvalResourceDecision: {
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
    EvalDecisionDetails: {
      shape: _EvalDecisionDetailsType
    }
  }
};
