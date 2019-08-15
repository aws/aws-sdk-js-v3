import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RunInstancesMonitoringEnabled: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      },
      locationName: "enabled"
    }
  }
};
