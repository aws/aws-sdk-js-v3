import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateContainerInstancesStateInput: _Structure_ = {
  type: "structure",
  required: ["containerInstances", "status"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    containerInstances: {
      shape: _StringList
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
