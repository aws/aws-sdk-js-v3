import { _Key } from "./_Key";
import { _AttributeUpdates } from "./_AttributeUpdates";
import { _ExpectedAttributeMap } from "./_ExpectedAttributeMap";
import { _ExpressionAttributeNameMap } from "./_ExpressionAttributeNameMap";
import { _ExpressionAttributeValueMap } from "./_ExpressionAttributeValueMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateItemInput: _Structure_ = {
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
    AttributeUpdates: {
      shape: _AttributeUpdates
    },
    Expected: {
      shape: _ExpectedAttributeMap
    },
    ConditionalOperator: {
      shape: {
        type: "string"
      }
    },
    ReturnValues: {
      shape: {
        type: "string"
      }
    },
    ReturnConsumedCapacity: {
      shape: {
        type: "string"
      }
    },
    ReturnItemCollectionMetrics: {
      shape: {
        type: "string"
      }
    },
    UpdateExpression: {
      shape: {
        type: "string"
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
    }
  }
};
