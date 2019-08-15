import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForDomainOutput: _Structure_ = {
  type: "structure",
  required: ["TagList"],
  members: {
    TagList: {
      shape: _TagList
    }
  }
};
