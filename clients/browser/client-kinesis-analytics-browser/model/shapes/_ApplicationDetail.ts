import { _InputDescriptions } from "./_InputDescriptions";
import { _OutputDescriptions } from "./_OutputDescriptions";
import { _ReferenceDataSourceDescriptions } from "./_ReferenceDataSourceDescriptions";
import { _CloudWatchLoggingOptionDescriptions } from "./_CloudWatchLoggingOptionDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationDetail: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "ApplicationARN",
    "ApplicationStatus",
    "ApplicationVersionId"
  ],
  members: {
    ApplicationName: {
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
    ApplicationARN: {
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
    InputDescriptions: {
      shape: _InputDescriptions
    },
    OutputDescriptions: {
      shape: _OutputDescriptions
    },
    ReferenceDataSourceDescriptions: {
      shape: _ReferenceDataSourceDescriptions
    },
    CloudWatchLoggingOptionDescriptions: {
      shape: _CloudWatchLoggingOptionDescriptions
    },
    ApplicationCode: {
      shape: {
        type: "string"
      }
    },
    ApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
