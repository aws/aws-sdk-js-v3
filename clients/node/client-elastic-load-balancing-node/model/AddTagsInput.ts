import { _LoadBalancerNames } from "./_LoadBalancerNames";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerNames", "Tags"],
  members: {
    LoadBalancerNames: {
      shape: _LoadBalancerNames
    },
    Tags: {
      shape: _TagList
    }
  }
};
