import { _PutItemInput } from "./_PutItemInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DynamoDBv2Action: _Structure_ = {
  type: "structure",
  required: ["roleArn", "putItem"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    putItem: {
      shape: _PutItemInput
    }
  }
};
