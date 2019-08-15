import { _ResourceNameList } from "./_ResourceNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachInstancesToLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["loadBalancerName", "instanceNames"],
  members: {
    loadBalancerName: {
      shape: {
        type: "string"
      }
    },
    instanceNames: {
      shape: _ResourceNameList
    }
  }
};
