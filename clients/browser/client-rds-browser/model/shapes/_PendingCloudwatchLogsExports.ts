import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingCloudwatchLogsExports: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LogTypesToEnable: {
      shape: _LogTypeList
    },
    LogTypesToDisable: {
      shape: _LogTypeList
    }
  }
};
