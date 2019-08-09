import { List as _List_ } from "@aws-sdk/types";
import { _InstanceMonitoring } from "./_InstanceMonitoring";

export const _InstanceMonitoringList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceMonitoring,
    locationName: "item"
  }
};
