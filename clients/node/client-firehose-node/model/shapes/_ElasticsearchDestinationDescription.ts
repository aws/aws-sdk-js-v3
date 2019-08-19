import { _ElasticsearchBufferingHints } from "./_ElasticsearchBufferingHints";
import { _ElasticsearchRetryOptions } from "./_ElasticsearchRetryOptions";
import { _S3DestinationDescription } from "./_S3DestinationDescription";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchDestinationDescription: _Structure_ = {
  type: "structure",
  required: [],
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
    S3DestinationDescription: {
      shape: _S3DestinationDescription
    },
    ProcessingConfiguration: {
      shape: _ProcessingConfiguration
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    }
  }
};
