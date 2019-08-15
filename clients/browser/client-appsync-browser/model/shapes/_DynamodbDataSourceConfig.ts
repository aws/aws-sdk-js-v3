import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DynamodbDataSourceConfig: _Structure_ = {
  type: "structure",
  required: ["tableName", "awsRegion"],
  members: {
    tableName: {
      shape: {
        type: "string"
      }
    },
    awsRegion: {
      shape: {
        type: "string"
      }
    },
    useCallerCredentials: {
      shape: {
        type: "boolean"
      }
    }
  }
};
