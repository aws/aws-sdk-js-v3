import { List as _List_ } from "@aws-sdk/types";
import { _OperatingSystemConfigurationManager } from "./_OperatingSystemConfigurationManager";

export const _OperatingSystemConfigurationManagers: _List_ = {
  type: "list",
  member: {
    shape: _OperatingSystemConfigurationManager
  }
};
