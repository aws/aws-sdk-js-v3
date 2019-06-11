import { _Key } from "./_Key";
import { _ExpressionAttributeNameMap } from "./_ExpressionAttributeNameMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Get: _Structure_ = {
  type: "structure",
  required: ["Key", "TableName"],
  members: {
    Key: {
      shape: _Key
    },
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ProjectionExpression: {
      shape: {
        type: "string"
      }
    },
    ExpressionAttributeNames: {
      shape: _ExpressionAttributeNameMap
    }
  }
};
