import { _ResourceList } from "./_ResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateComponentInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName", "ComponentName", "ResourceList"],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    ComponentName: {
      shape: {
        type: "string"
      }
    },
    ResourceList: {
      shape: _ResourceList
    }
  }
};
