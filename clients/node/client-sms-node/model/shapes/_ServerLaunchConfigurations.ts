import { List as _List_ } from "@aws-sdk/types";
import { _ServerLaunchConfiguration } from "./_ServerLaunchConfiguration";

export const _ServerLaunchConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _ServerLaunchConfiguration
  }
};
