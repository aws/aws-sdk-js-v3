import { _ListOf__string } from "./_ListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["TagKeys", "ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource-arn"
    },
    TagKeys: {
      shape: _ListOf__string,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};
