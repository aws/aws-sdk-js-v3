import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "Tags"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "Arn"
    },
    Tags: {
      shape: _Tags
    }
  }
};
