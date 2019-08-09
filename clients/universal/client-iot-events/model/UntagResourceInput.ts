import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tagKeys"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "resourceArn"
    },
    tagKeys: {
      shape: _TagKeys,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};
