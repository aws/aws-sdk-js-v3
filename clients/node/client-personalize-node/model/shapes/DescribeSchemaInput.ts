import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSchemaInput: _Structure_ = {
  type: "structure",
  required: ["schemaArn"],
  members: {
    schemaArn: {
      shape: {
        type: "string"
      }
    }
  }
};
