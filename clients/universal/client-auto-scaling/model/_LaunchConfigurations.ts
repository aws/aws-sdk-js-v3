import { List as _List_ } from "@aws-sdk/types";
import { _LaunchConfiguration } from "./_LaunchConfiguration";

export const _LaunchConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _LaunchConfiguration
  }
};
