import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "arn"
    },
    TagKeys: {
      shape: ___listOf__string,
      locationName: "tagKeys"
    }
  }
};
