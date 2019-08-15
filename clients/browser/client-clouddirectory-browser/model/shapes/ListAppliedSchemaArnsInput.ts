import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAppliedSchemaArnsInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      }
    },
    SchemaArn: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
