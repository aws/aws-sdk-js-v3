import { _ApplicationConfigurationDescription } from "./_ApplicationConfigurationDescription";
import { _CloudWatchLoggingOptionDescriptions } from "./_CloudWatchLoggingOptionDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationDetail: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationARN",
    "ApplicationName",
    "RuntimeEnvironment",
    "ApplicationStatus",
    "ApplicationVersionId"
  ],
  members: {
    ApplicationARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationDescription: {
      shape: {
        type: "string"
      }
    },
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RuntimeEnvironment: {
      shape: {
        type: "string"
      }
    },
    ServiceExecutionRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationStatus: {
      shape: {
        type: "string"
      }
    },
    ApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    CreateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ApplicationConfigurationDescription: {
      shape: _ApplicationConfigurationDescription
    },
    CloudWatchLoggingOptionDescriptions: {
      shape: _CloudWatchLoggingOptionDescriptions
    }
  }
};
