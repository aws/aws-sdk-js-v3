import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["Name", "SchemaArn"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    }
  }
};
