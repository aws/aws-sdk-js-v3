import { _AnalyticsConfigurationList } from "./_AnalyticsConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBucketAnalyticsConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    ContinuationToken: {
      shape: {
        type: "string"
      }
    },
    NextContinuationToken: {
      shape: {
        type: "string"
      }
    },
    AnalyticsConfigurationList: {
      shape: _AnalyticsConfigurationList,
      locationName: "AnalyticsConfiguration"
    }
  }
};
