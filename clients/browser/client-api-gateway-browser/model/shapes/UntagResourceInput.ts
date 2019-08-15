import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tagKeys"],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource_arn"
    },
    tagKeys: {
      shape: _ListOfString,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};
