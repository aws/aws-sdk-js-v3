import { _WorkGroupConfigurationUpdates } from "./_WorkGroupConfigurationUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWorkGroupInput: _Structure_ = {
  type: "structure",
  required: ["WorkGroup"],
  members: {
    WorkGroup: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ConfigurationUpdates: {
      shape: _WorkGroupConfigurationUpdates
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
