import { _ElasticsearchBufferingHints } from "./_ElasticsearchBufferingHints";
import { _ElasticsearchRetryOptions } from "./_ElasticsearchRetryOptions";
import { _S3DestinationConfiguration } from "./_S3DestinationConfiguration";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchDestinationConfiguration: _Structure_ = {
  type: "structure",
  required: [
    "RoleARN",
    "DomainARN",
    "IndexName",
    "TypeName",
    "S3Configuration"
  ],
  members: {
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DomainARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IndexName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IndexRotationPeriod: {
      shape: {
        type: "string"
      }
    },
    BufferingHints: {
      shape: _ElasticsearchBufferingHints
    },
    RetryOptions: {
      shape: _ElasticsearchRetryOptions
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
