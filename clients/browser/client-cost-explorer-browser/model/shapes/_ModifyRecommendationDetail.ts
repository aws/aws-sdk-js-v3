import { _TargetInstancesList } from "./_TargetInstancesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModifyRecommendationDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetInstances: {
      shape: _TargetInstancesList
    }
  }
};
