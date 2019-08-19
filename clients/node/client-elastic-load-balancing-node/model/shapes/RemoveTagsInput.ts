import { _LoadBalancerNames } from "./_LoadBalancerNames";
import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerNames", "Tags"],
  members: {
    LoadBalancerNames: {
      shape: _LoadBalancerNames
    },
    Tags: {
      shape: _TagKeyList
    }
  }
};
