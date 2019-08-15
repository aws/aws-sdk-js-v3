import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RdsHttpEndpointConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    awsRegion: {
      shape: {
        type: "string"
      }
    },
    dbClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    databaseName: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    awsSecretStoreArn: {
      shape: {
        type: "string"
      }
    }
  }
};
