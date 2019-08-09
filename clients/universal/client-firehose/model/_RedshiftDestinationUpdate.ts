import { _CopyCommand } from "./_CopyCommand";
import { _RedshiftRetryOptions } from "./_RedshiftRetryOptions";
import { _S3DestinationUpdate } from "./_S3DestinationUpdate";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RedshiftDestinationUpdate: _Structure_ = {
  type: "structure",
  required: [],
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
    S3Update: {
      shape: _S3DestinationUpdate
    },
    ProcessingConfiguration: {
      shape: _ProcessingConfiguration
    },
    S3BackupMode: {
      shape: {
        type: "string"
      }
    },
    S3BackupUpdate: {
      shape: _S3DestinationUpdate
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
