import { _ResourceIdList } from "./_ResourceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceIdList"],
  members: {
    ResourceIdList: {
      shape: _ResourceIdList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
