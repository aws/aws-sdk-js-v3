import { List as _List_ } from "@aws-sdk/types";
import { _ServerReplicationConfiguration } from "./_ServerReplicationConfiguration";

export const _ServerReplicationConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _ServerReplicationConfiguration
  }
};
