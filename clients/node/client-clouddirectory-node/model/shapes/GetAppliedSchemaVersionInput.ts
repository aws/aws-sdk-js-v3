import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAppliedSchemaVersionInput: _Structure_ = {
  type: "structure",
  required: ["SchemaArn"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      }
    }
  }
};
