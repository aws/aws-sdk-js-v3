import { _ElasticsearchBufferingHints } from "./_ElasticsearchBufferingHints";
import { _ElasticsearchRetryOptions } from "./_ElasticsearchRetryOptions";
import { _S3DestinationUpdate } from "./_S3DestinationUpdate";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchDestinationUpdate: _Structure_ = {
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
