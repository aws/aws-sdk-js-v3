import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "Tags"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
