import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Resource", "TagKeys"],
  members: {
    Resource: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ARN"
    },
    TagKeys: {
      shape: _TagKeyList,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};
