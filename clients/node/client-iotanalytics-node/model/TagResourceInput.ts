import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tags"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 20
      },
      location: "querystring",
      locationName: "resourceArn"
    },
    tags: {
      shape: _TagList
    }
  }
};
