import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MethodSetting: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    metricsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    loggingLevel: {
      shape: {
        type: "string"
      }
    },
    dataTraceEnabled: {
      shape: {
        type: "boolean"
      }
    },
    throttlingBurstLimit: {
      shape: {
        type: "integer"
      }
    },
    throttlingRateLimit: {
      shape: {
        type: "float"
      }
    },
    cachingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    cacheTtlInSeconds: {
      shape: {
        type: "integer"
      }
    },
    cacheDataEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    requireAuthorizationForCacheControl: {
      shape: {
        type: "boolean"
      }
    },
    unauthorizedCacheControlHeaderStrategy: {
      shape: {
        type: "string"
      }
    }
  }
};
