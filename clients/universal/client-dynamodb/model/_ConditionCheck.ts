import { _Key } from "./_Key";
import { _ExpressionAttributeNameMap } from "./_ExpressionAttributeNameMap";
import { _ExpressionAttributeValueMap } from "./_ExpressionAttributeValueMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConditionCheck: _Structure_ = {
  type: "structure",
  required: ["Key", "TableName", "ConditionExpression"],
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
    ConditionExpression: {
      shape: {
        type: "string"
      }
    },
    ExpressionAttributeNames: {
      shape: _ExpressionAttributeNameMap
    },
    ExpressionAttributeValues: {
      shape: _ExpressionAttributeValueMap
    },
    ReturnValuesOnConditionCheckFailure: {
      shape: {
        type: "string"
      }
    }
  }
};
