import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutSchemaFromJsonInput: _Structure_ = {
  type: "structure",
  required: ["SchemaArn", "Document"],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    Document: {
      shape: {
        type: "string"
      }
    }
  }
};
