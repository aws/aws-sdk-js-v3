import { List as _List_ } from "@aws-sdk/types";
import { _TriggerConfig } from "./_TriggerConfig";

export const _TriggerConfigList: _List_ = {
  type: "list",
  member: {
    shape: _TriggerConfig
  }
};
