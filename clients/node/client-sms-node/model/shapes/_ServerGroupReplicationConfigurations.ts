import { List as _List_ } from "@aws-sdk/types";
import { _ServerGroupReplicationConfiguration } from "./_ServerGroupReplicationConfiguration";

export const _ServerGroupReplicationConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _ServerGroupReplicationConfiguration
  }
};
