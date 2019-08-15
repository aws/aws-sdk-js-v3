import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tags"],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource_arn"
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
