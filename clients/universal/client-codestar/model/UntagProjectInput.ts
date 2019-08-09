import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagProjectInput: _Structure_ = {
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
      shape: _TagKeys
    }
  }
};
