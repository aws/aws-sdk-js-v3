import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RouteSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DataTraceEnabled: {
      shape: {
        type: "boolean"
      },
      locationName: "dataTraceEnabled"
    },
    DetailedMetricsEnabled: {
      shape: {
        type: "boolean"
      },
      locationName: "detailedMetricsEnabled"
    },
    LoggingLevel: {
      shape: {
        type: "string"
      },
      locationName: "loggingLevel"
    },
    ThrottlingBurstLimit: {
      shape: {
        type: "integer"
      },
      locationName: "throttlingBurstLimit"
    },
    ThrottlingRateLimit: {
      shape: {
        type: "float"
      },
      locationName: "throttlingRateLimit"
    }
  }
};
