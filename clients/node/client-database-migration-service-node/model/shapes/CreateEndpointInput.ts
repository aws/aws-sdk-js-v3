import { _TagList } from "./_TagList";
import { _DynamoDbSettings } from "./_DynamoDbSettings";
import { _S3Settings } from "./_S3Settings";
import { _DmsTransferSettings } from "./_DmsTransferSettings";
import { _MongoDbSettings } from "./_MongoDbSettings";
import { _KinesisSettings } from "./_KinesisSettings";
import { _ElasticsearchSettings } from "./_ElasticsearchSettings";
import { _RedshiftSettings } from "./_RedshiftSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointIdentifier", "EndpointType", "EngineName"],
  members: {
    EndpointIdentifier: {
      shape: {
        type: "string"
      }
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    EngineName: {
      shape: {
        type: "string"
      }
    },
    Username: {
      shape: {
        type: "string"
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    ServerName: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    },
    ExtraConnectionAttributes: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    CertificateArn: {
      shape: {
        type: "string"
      }
    },
    SslMode: {
      shape: {
        type: "string"
      }
    },
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
    DynamoDbSettings: {
      shape: _DynamoDbSettings
    },
    S3Settings: {
      shape: _S3Settings
    },
    DmsTransferSettings: {
      shape: _DmsTransferSettings
    },
    MongoDbSettings: {
      shape: _MongoDbSettings
    },
    KinesisSettings: {
      shape: _KinesisSettings
    },
    ElasticsearchSettings: {
      shape: _ElasticsearchSettings
    },
    RedshiftSettings: {
      shape: _RedshiftSettings
    }
  }
};
