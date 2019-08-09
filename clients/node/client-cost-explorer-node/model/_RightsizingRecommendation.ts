import { _CurrentInstance } from "./_CurrentInstance";
import { _ModifyRecommendationDetail } from "./_ModifyRecommendationDetail";
import { _TerminateRecommendationDetail } from "./_TerminateRecommendationDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RightsizingRecommendation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    CurrentInstance: {
      shape: _CurrentInstance
    },
    RightsizingType: {
      shape: {
        type: "string"
      }
    },
    ModifyRecommendationDetail: {
      shape: _ModifyRecommendationDetail
    },
    TerminateRecommendationDetail: {
      shape: _TerminateRecommendationDetail
    }
  }
};
