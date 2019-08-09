import { _ResultConfigurationUpdates } from "./_ResultConfigurationUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkGroupConfigurationUpdates: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnforceWorkGroupConfiguration: {
      shape: {
        type: "boolean"
      }
    },
    ResultConfigurationUpdates: {
      shape: _ResultConfigurationUpdates
    },
    PublishCloudWatchMetricsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    BytesScannedCutoffPerQuery: {
      shape: {
        type: "integer",
        min: 10000000
      }
    },
    RemoveBytesScannedCutoffPerQuery: {
      shape: {
        type: "boolean"
      }
    }
  }
};
