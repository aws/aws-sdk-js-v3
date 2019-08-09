import { _CopyCommand } from "./_CopyCommand";
import { _RedshiftRetryOptions } from "./_RedshiftRetryOptions";
import { _S3DestinationDescription } from "./_S3DestinationDescription";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RedshiftDestinationDescription: _Structure_ = {
  type: "structure",
  required: [
    "RoleARN",
    "ClusterJDBCURL",
    "CopyCommand",
    "Username",
    "S3DestinationDescription"
  ],
  members: {
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClusterJDBCURL: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CopyCommand: {
      shape: _CopyCommand
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    RetryOptions: {
      shape: _RedshiftRetryOptions
    },
    S3DestinationDescription: {
      shape: _S3DestinationDescription
    },
    ProcessingConfiguration: {
      shape: _ProcessingConfiguration
    },
    S3BackupMode: {
      shape: {
        type: "string"
      }
    },
    S3BackupDescription: {
      shape: _S3DestinationDescription
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
