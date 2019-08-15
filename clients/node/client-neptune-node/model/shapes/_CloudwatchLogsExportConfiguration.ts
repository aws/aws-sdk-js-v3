import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudwatchLogsExportConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnableLogTypes: {
      shape: _LogTypeList
    },
    DisableLogTypes: {
      shape: _LogTypeList
    }
  }
};
