import { _BufferingHints } from "./_BufferingHints";
import { _EncryptionConfiguration } from "./_EncryptionConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3DestinationConfiguration: _Structure_ = {
  type: "structure",
  required: ["RoleARN", "BucketARN"],
  members: {
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BucketARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Prefix: {
      shape: {
        type: "string"
      }
    },
    ErrorOutputPrefix: {
      shape: {
        type: "string"
      }
    },
    BufferingHints: {
      shape: _BufferingHints
    },
    CompressionFormat: {
      shape: {
        type: "string"
      }
    },
    EncryptionConfiguration: {
      shape: _EncryptionConfiguration
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
