import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "Tags"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
