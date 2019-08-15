import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DynamoDBAction: _Structure_ = {
  type: "structure",
  required: ["tableName", "roleArn", "hashKeyField", "hashKeyValue"],
  members: {
    tableName: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    },
    operation: {
      shape: {
        type: "string"
      }
    },
    hashKeyField: {
      shape: {
        type: "string"
      }
    },
    hashKeyValue: {
      shape: {
        type: "string"
      }
    },
    hashKeyType: {
      shape: {
        type: "string"
      }
    },
    rangeKeyField: {
      shape: {
        type: "string"
      }
    },
    rangeKeyValue: {
      shape: {
        type: "string"
      }
    },
    rangeKeyType: {
      shape: {
        type: "string"
      }
    },
    payloadField: {
      shape: {
        type: "string"
      }
    }
  }
};
