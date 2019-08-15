import { _WeightedTargets } from "./_WeightedTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpRouteAction: _Structure_ = {
  type: "structure",
  required: ["weightedTargets"],
  members: {
    weightedTargets: {
      shape: _WeightedTargets
    }
  }
};
