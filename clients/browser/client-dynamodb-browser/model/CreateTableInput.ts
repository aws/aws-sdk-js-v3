import { _AttributeDefinitions } from "./_AttributeDefinitions";
import { _KeySchema } from "./_KeySchema";
import { _LocalSecondaryIndexList } from "./_LocalSecondaryIndexList";
import { _GlobalSecondaryIndexList } from "./_GlobalSecondaryIndexList";
import { _ProvisionedThroughput } from "./_ProvisionedThroughput";
import { _StreamSpecification } from "./_StreamSpecification";
import { _SSESpecification } from "./_SSESpecification";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTableInput: _Structure_ = {
  type: "structure",
  required: ["AttributeDefinitions", "TableName", "KeySchema"],
  members: {
    AttributeDefinitions: {
      shape: _AttributeDefinitions
    },
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    KeySchema: {
      shape: _KeySchema
    },
    LocalSecondaryIndexes: {
      shape: _LocalSecondaryIndexList
    },
    GlobalSecondaryIndexes: {
      shape: _GlobalSecondaryIndexList
    },
    BillingMode: {
      shape: {
        type: "string"
      }
    },
    ProvisionedThroughput: {
      shape: _ProvisionedThroughput
    },
    StreamSpecification: {
      shape: _StreamSpecification
    },
    SSESpecification: {
      shape: _SSESpecification
    },
    Tags: {
      shape: _TagList
    }
  }
};
