import { _Monitoring } from "./_Monitoring";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceMonitoring: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    Monitoring: {
      shape: _Monitoring,
      locationName: "monitoring"
    }
  }
};
