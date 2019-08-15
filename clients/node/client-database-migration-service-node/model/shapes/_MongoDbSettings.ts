import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MongoDbSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    AuthType: {
      shape: {
        type: "string"
      }
    },
    AuthMechanism: {
      shape: {
        type: "string"
      }
    },
    NestingLevel: {
      shape: {
        type: "string"
      }
    },
    ExtractDocId: {
      shape: {
        type: "string"
      }
    },
    DocsToInvestigate: {
      shape: {
        type: "string"
      }
    },
    AuthSource: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
