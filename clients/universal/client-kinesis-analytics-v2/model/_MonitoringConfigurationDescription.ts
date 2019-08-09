import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MonitoringConfigurationDescription: _Structure_ = {
  type: "structure",
  required: [],
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
