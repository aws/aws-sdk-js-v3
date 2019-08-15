import { _SplunkRetryOptions } from "./_SplunkRetryOptions";
import { _S3DestinationConfiguration } from "./_S3DestinationConfiguration";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SplunkDestinationConfiguration: _Structure_ = {
  type: "structure",
  required: ["HECEndpoint", "HECEndpointType", "HECToken", "S3Configuration"],
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
    S3Configuration: {
      shape: _S3DestinationConfiguration
    },
    ProcessingConfiguration: {
      shape: _ProcessingConfiguration
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
