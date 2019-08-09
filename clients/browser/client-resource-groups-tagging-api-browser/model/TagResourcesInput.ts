import { _ResourceARNList } from "./_ResourceARNList";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourcesInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARNList", "Tags"],
  members: {
    ResourceARNList: {
      shape: _ResourceARNList
    },
    Tags: {
      shape: _TagMap
    }
  }
};
