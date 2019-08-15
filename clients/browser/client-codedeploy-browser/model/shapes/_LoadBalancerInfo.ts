import { _ELBInfoList } from "./_ELBInfoList";
import { _TargetGroupInfoList } from "./_TargetGroupInfoList";
import { _TargetGroupPairInfoList } from "./_TargetGroupPairInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    elbInfoList: {
      shape: _ELBInfoList
    },
    targetGroupInfoList: {
      shape: _TargetGroupInfoList
    },
    targetGroupPairInfoList: {
      shape: _TargetGroupPairInfoList
    }
  }
};
