import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DynamoDbSettings: _Structure_ = {
  type: "structure",
  required: ["ServiceAccessRoleArn"],
  members: {
    ServiceAccessRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
