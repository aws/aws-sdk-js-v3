import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CatalogEntry: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName"],
  members: {
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
