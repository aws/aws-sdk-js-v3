import { _CopyCommand } from "./_CopyCommand";
import { _RedshiftRetryOptions } from "./_RedshiftRetryOptions";
import { _S3DestinationConfiguration } from "./_S3DestinationConfiguration";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RedshiftDestinationConfiguration: _Structure_ = {
  type: "structure",
  required: [
    "RoleARN",
    "ClusterJDBCURL",
    "CopyCommand",
    "Username",
    "Password",
    "S3Configuration"
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
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    RetryOptions: {
      shape: _RedshiftRetryOptions
    },
    S3Configuration: {
      shape: _S3DestinationConfiguration
    },
    ProcessingConfiguration: {
      shape: _ProcessingConfiguration
    },
    S3BackupMode: {
      shape: {
        type: "string"
      }
    },
    S3BackupConfiguration: {
      shape: _S3DestinationConfiguration
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
