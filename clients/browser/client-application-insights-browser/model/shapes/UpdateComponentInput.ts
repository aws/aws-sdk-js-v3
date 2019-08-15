import { _ResourceList } from "./_ResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateComponentInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName", "ComponentName"],
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
    NewComponentName: {
      shape: {
        type: "string"
      }
    },
    ResourceList: {
      shape: _ResourceList
    }
  }
};
