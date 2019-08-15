import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MonitoringConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationTypeUpdate: {
      shape: {
        type: "string"
      }
    },
    MetricsLevelUpdate: {
      shape: {
        type: "string"
      }
    },
    LogLevelUpdate: {
      shape: {
        type: "string"
      }
    }
  }
};
