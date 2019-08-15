import { _ResultConfiguration } from "./_ResultConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkGroupConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResultConfiguration: {
      shape: _ResultConfiguration
    },
    EnforceWorkGroupConfiguration: {
      shape: {
        type: "boolean"
      }
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
    }
  }
};
