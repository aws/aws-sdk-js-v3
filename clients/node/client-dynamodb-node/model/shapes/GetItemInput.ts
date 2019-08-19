import { _Key } from "./_Key";
import { _AttributeNameList } from "./_AttributeNameList";
import { _ExpressionAttributeNameMap } from "./_ExpressionAttributeNameMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetItemInput: _Structure_ = {
  type: "structure",
  required: ["TableName", "Key"],
  members: {
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Key: {
      shape: _Key
    },
    AttributesToGet: {
      shape: _AttributeNameList
    },
    ConsistentRead: {
      shape: {
        type: "boolean"
      }
    },
    ReturnConsumedCapacity: {
      shape: {
        type: "string"
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
