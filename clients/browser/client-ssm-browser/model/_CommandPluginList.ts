import { List as _List_ } from "@aws-sdk/types";
import { _CommandPlugin } from "./_CommandPlugin";

export const _CommandPluginList: _List_ = {
  type: "list",
  member: {
    shape: _CommandPlugin
  }
};
