import { _AnalyticsConfiguration } from "./_AnalyticsConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBucketAnalyticsConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AnalyticsConfiguration: {
      shape: _AnalyticsConfiguration
    }
  },
  payload: "AnalyticsConfiguration"
};
