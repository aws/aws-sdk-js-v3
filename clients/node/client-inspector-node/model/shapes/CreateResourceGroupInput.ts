import { _ResourceGroupTags } from "./_ResourceGroupTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceGroupInput: _Structure_ = {
  type: "structure",
  required: ["resourceGroupTags"],
  members: {
    resourceGroupTags: {
      shape: _ResourceGroupTags
    }
  }
};
