import { _SplunkRetryOptions } from "./_SplunkRetryOptions";
import { _S3DestinationUpdate } from "./_S3DestinationUpdate";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SplunkDestinationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HECEndpoint: {
      shape: {
        type: "string"
      }
    },
    HECEndpointType: {
      shape: {
        type: "string"
      }
    },
    HECToken: {
      shape: {
        type: "string"
      }
    },
    HECAcknowledgmentTimeoutInSeconds: {
      shape: {
        type: "integer",
        min: 180
      }
    },
    RetryOptions: {
      shape: _SplunkRetryOptions
    },
    S3BackupMode: {
      shape: {
        type: "string"
      }
    },
    S3Update: {
      shape: _S3DestinationUpdate
    },
    ProcessingConfiguration: {
      shape: _ProcessingConfiguration
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
