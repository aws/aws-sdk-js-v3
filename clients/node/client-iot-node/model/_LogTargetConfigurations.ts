import { List as _List_ } from "@aws-sdk/types";
import { _LogTargetConfiguration } from "./_LogTargetConfiguration";

export const _LogTargetConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _LogTargetConfiguration
  }
};
