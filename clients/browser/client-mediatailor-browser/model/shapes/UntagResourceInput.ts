import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagKeys"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceArn"
    },
    TagKeys: {
      shape: ___listOf__string,
      location: "querystring",
      locationName: "tagKeys"
    }
  }
};
