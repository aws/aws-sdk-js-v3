import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserTagsOutput: _Structure_ = {
  type: "structure",
  required: ["Tags"],
  members: {
    Tags: {
      shape: _tagListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
