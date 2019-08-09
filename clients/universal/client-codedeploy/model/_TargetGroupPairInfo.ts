import { _TargetGroupInfoList } from "./_TargetGroupInfoList";
import { _TrafficRoute } from "./_TrafficRoute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetGroupPairInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    targetGroups: {
      shape: _TargetGroupInfoList
    },
    prodTrafficRoute: {
      shape: _TrafficRoute
    },
    testTrafficRoute: {
      shape: _TrafficRoute
    }
  }
};
