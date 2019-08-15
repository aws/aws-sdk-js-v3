import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteSqlInput: _Structure_ = {
  type: "structure",
  required: ["awsSecretStoreArn", "dbClusterOrInstanceArn", "sqlStatements"],
  members: {
    awsSecretStoreArn: {
      shape: {
        type: "string"
      }
    },
    database: {
      shape: {
        type: "string"
      }
    },
    dbClusterOrInstanceArn: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    sqlStatements: {
      shape: {
        type: "string"
      }
    }
  }
};
