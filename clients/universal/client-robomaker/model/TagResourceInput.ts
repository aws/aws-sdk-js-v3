import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tags"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "resourceArn"
    },
    tags: {
      shape: _TagMap
    }
  }
};
