import { Structure as _Structure_ } from "@aws-sdk/types";

export const PublishSchemaInput: _Structure_ = {
  type: "structure",
  required: ["DevelopmentSchemaArn", "Version"],
  members: {
    DevelopmentSchemaArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    Version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MinorVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
