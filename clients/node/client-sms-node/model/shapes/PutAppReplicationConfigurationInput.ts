import { _ServerGroupReplicationConfigurations } from "./_ServerGroupReplicationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAppReplicationConfigurationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    serverGroupReplicationConfigurations: {
      shape: _ServerGroupReplicationConfigurations
    }
  }
};
