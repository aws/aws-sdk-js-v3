import { _PolicyIdList } from "./_PolicyIdList";
import { _ResourceTypeValuesList } from "./_ResourceTypeValuesList";
import { _TargetTagsFilterList } from "./_TargetTagsFilterList";
import { _TagsToAddFilterList } from "./_TagsToAddFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLifecyclePoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyIds: {
      shape: _PolicyIdList,
      location: "querystring",
      locationName: "policyIds"
    },
    State: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "state"
    },
    ResourceTypes: {
      shape: _ResourceTypeValuesList,
      location: "querystring",
      locationName: "resourceTypes"
    },
    TargetTags: {
      shape: _TargetTagsFilterList,
      location: "querystring",
      locationName: "targetTags"
    },
    TagsToAdd: {
      shape: _TagsToAddFilterList,
      location: "querystring",
      locationName: "tagsToAdd"
    }
  }
};
