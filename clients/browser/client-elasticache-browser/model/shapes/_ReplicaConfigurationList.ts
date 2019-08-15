import { List as _List_ } from "@aws-sdk/types";
import { _ConfigureShard } from "./_ConfigureShard";

export const _ReplicaConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigureShard,
    locationName: "ConfigureShard"
  }
};
