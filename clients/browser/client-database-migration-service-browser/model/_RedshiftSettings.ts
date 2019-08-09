import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RedshiftSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptAnyDate: {
      shape: {
        type: "boolean"
      }
    },
    AfterConnectScript: {
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
    ConnectionTimeout: {
      shape: {
        type: "integer"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    },
    DateFormat: {
      shape: {
        type: "string"
      }
    },
    EmptyAsNull: {
      shape: {
        type: "boolean"
      }
    },
    EncryptionMode: {
      shape: {
        type: "string"
      }
    },
    FileTransferUploadStreams: {
      shape: {
        type: "integer"
      }
    },
    LoadTimeout: {
      shape: {
        type: "integer"
      }
    },
    MaxFileSize: {
      shape: {
        type: "integer"
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    RemoveQuotes: {
      shape: {
        type: "boolean"
      }
    },
    ReplaceInvalidChars: {
      shape: {
        type: "string"
      }
    },
    ReplaceChars: {
      shape: {
        type: "string"
      }
    },
    ServerName: {
      shape: {
        type: "string"
      }
    },
    ServiceAccessRoleArn: {
      shape: {
        type: "string"
      }
    },
    ServerSideEncryptionKmsKeyId: {
      shape: {
        type: "string"
      }
    },
    TimeFormat: {
      shape: {
        type: "string"
      }
    },
    TrimBlanks: {
      shape: {
        type: "boolean"
      }
    },
    TruncateColumns: {
      shape: {
        type: "boolean"
      }
    },
    Username: {
      shape: {
        type: "string"
      }
    },
    WriteBufferSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
