import { ___listOf__string } from "./___listOf__string";
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
      locationName: "resourceArn"
    },
    TagKeys: {
      shape: ___listOf__string,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};
