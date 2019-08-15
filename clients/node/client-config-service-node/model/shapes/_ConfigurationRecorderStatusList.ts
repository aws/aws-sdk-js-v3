import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationRecorderStatus } from "./_ConfigurationRecorderStatus";

export const _ConfigurationRecorderStatusList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationRecorderStatus
  }
};
