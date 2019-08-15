import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MonitoringConfiguration: _Structure_ = {
  type: "structure",
  required: ["ConfigurationType"],
  members: {
    ConfigurationType: {
      shape: {
        type: "string"
      }
    },
    MetricsLevel: {
      shape: {
        type: "string"
      }
    },
    LogLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
