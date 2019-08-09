import { List as _List_ } from "@aws-sdk/types";
import { _TelemetryRecord } from "./_TelemetryRecord";

export const _TelemetryRecordList: _List_ = {
  type: "list",
  member: {
    shape: _TelemetryRecord
  }
};
