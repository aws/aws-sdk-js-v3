import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource-arn"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
