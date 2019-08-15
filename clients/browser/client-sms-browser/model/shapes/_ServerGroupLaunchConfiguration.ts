import { _ServerLaunchConfigurations } from "./_ServerLaunchConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerGroupLaunchConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serverGroupId: {
      shape: {
        type: "string"
      }
    },
    launchOrder: {
      shape: {
        type: "integer"
      }
    },
    serverLaunchConfigurations: {
      shape: _ServerLaunchConfigurations
    }
  }
};
