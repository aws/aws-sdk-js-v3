import { List as _List_ } from "@aws-sdk/types";
import { _ServerGroupLaunchConfiguration } from "./_ServerGroupLaunchConfiguration";

export const _ServerGroupLaunchConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _ServerGroupLaunchConfiguration
  }
};
