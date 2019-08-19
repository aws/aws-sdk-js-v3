import { _ResourceGroupTags } from "./_ResourceGroupTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceGroup: _Structure_ = {
  type: "structure",
  required: ["arn", "tags", "createdAt"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _ResourceGroupTags
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
