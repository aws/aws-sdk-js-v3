import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagProjectInput: _Structure_ = {
  type: "structure",
  required: ["id", "tags"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 2
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
