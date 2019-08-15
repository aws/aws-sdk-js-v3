import { _BufferingHints } from "./_BufferingHints";
import { _EncryptionConfiguration } from "./_EncryptionConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { _ProcessingConfiguration } from "./_ProcessingConfiguration";
import { _S3DestinationDescription } from "./_S3DestinationDescription";
import { _DataFormatConversionConfiguration } from "./_DataFormatConversionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExtendedS3DestinationDescription: _Structure_ = {
  type: "structure",
  required: [
    "RoleARN",
    "BucketARN",
    "BufferingHints",
    "CompressionFormat",
    "EncryptionConfiguration"
  ],
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
    DataFormatConversionConfiguration: {
      shape: _DataFormatConversionConfiguration
    }
  }
};
