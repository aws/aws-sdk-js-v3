import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceAccessRoleArn: {
      shape: {
        type: "string"
      }
    },
    ExternalTableDefinition: {
      shape: {
        type: "string"
      }
    },
    CsvRowDelimiter: {
      shape: {
        type: "string"
      }
    },
    CsvDelimiter: {
      shape: {
        type: "string"
      }
    },
    BucketFolder: {
      shape: {
        type: "string"
      }
    },
    BucketName: {
      shape: {
        type: "string"
      }
    },
    CompressionType: {
      shape: {
        type: "string"
      }
    },
    EncryptionMode: {
      shape: {
        type: "string"
      }
    },
    ServerSideEncryptionKmsKeyId: {
      shape: {
        type: "string"
      }
    },
    DataFormat: {
      shape: {
        type: "string"
      }
    },
    EncodingType: {
      shape: {
        type: "string"
      }
    },
    DictPageSizeLimit: {
      shape: {
        type: "integer"
      }
    },
    RowGroupLength: {
      shape: {
        type: "integer"
      }
    },
    DataPageSize: {
      shape: {
        type: "integer"
      }
    },
    ParquetVersion: {
      shape: {
        type: "string"
      }
    },
    EnableStatistics: {
      shape: {
        type: "boolean"
      }
    },
    IncludeOpForFullLoad: {
      shape: {
        type: "boolean"
      }
    },
    CdcInsertsOnly: {
      shape: {
        type: "boolean"
      }
    },
    TimestampColumnName: {
      shape: {
        type: "string"
      }
    }
  }
};
