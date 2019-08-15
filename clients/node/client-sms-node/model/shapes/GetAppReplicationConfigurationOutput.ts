import { _ServerGroupReplicationConfigurations } from "./_ServerGroupReplicationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAppReplicationConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serverGroupReplicationConfigurations: {
      shape: _ServerGroupReplicationConfigurations
    }
  }
};
