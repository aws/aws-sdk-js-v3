import { _InstanceMonitoringList } from "./_InstanceMonitoringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const MonitorInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceMonitorings: {
      shape: _InstanceMonitoringList,
      locationName: "instancesSet"
    }
  }
};
