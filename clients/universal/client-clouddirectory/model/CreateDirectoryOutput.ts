import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDirectoryOutput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "Name", "ObjectIdentifier", "AppliedSchemaArn"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ObjectIdentifier: {
      shape: {
        type: "string"
      }
    },
    AppliedSchemaArn: {
      shape: {
        type: "string"
      }
    }
  }
};
