import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn"],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resourceArn"
    },
    tags: {
      shape: _TagsMap
    }
  }
};
