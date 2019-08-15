import { _EC2TagFilterList } from "./_EC2TagFilterList";
import { _AutoScalingGroupNameList } from "./_AutoScalingGroupNameList";
import { _EC2TagSet } from "./_EC2TagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetInstances: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tagFilters: {
      shape: _EC2TagFilterList
    },
    autoScalingGroups: {
      shape: _AutoScalingGroupNameList
    },
    ec2TagSet: {
      shape: _EC2TagSet
    }
  }
};
