import { _MapOfMethodSettings } from "./_MapOfMethodSettings";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { _AccessLogSettings } from "./_AccessLogSettings";
import { _CanarySettings } from "./_CanarySettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Stage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    clientCertificateId: {
      shape: {
        type: "string"
      }
    },
    stageName: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    cacheClusterEnabled: {
      shape: {
        type: "boolean"
      }
    },
    cacheClusterSize: {
      shape: {
        type: "string"
      }
    },
    cacheClusterStatus: {
      shape: {
        type: "string"
      }
    },
    methodSettings: {
      shape: _MapOfMethodSettings
    },
    variables: {
      shape: _MapOfStringToString
    },
    documentationVersion: {
      shape: {
        type: "string"
      }
    },
    accessLogSettings: {
      shape: _AccessLogSettings
    },
    canarySettings: {
      shape: _CanarySettings
    },
    tracingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    webAclArn: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
