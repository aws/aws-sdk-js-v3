import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlueConfiguration: _Structure_ = {
  type: "structure",
  required: ["tableName", "databaseName"],
  members: {
    tableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    databaseName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
