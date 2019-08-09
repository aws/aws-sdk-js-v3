import { _ServerReplicationConfigurations } from "./_ServerReplicationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerGroupReplicationConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serverGroupId: {
      shape: {
        type: "string"
      }
    },
    serverReplicationConfigurations: {
      shape: _ServerReplicationConfigurations
    }
  }
};
