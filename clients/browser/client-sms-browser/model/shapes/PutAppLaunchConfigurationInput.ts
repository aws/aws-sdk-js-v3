import { _ServerGroupLaunchConfigurations } from "./_ServerGroupLaunchConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAppLaunchConfigurationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    roleName: {
      shape: {
        type: "string"
      }
    },
    serverGroupLaunchConfigurations: {
      shape: _ServerGroupLaunchConfigurations
    }
  }
};
