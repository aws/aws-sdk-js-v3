import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplySchemaInput: _Structure_ = {
  type: "structure",
  required: ["PublishedSchemaArn", "DirectoryArn"],
  members: {
    PublishedSchemaArn: {
      shape: {
        type: "string"
      }
    },
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    }
  }
};
