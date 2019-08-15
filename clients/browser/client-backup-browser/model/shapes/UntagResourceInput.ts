import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagKeyList"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resourceArn"
    },
    TagKeyList: {
      shape: _TagKeyList
    }
  }
};
