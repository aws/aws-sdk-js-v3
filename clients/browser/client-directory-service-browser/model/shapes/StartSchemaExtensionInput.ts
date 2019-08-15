import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartSchemaExtensionInput: _Structure_ = {
  type: "structure",
  required: [
    "DirectoryId",
    "CreateSnapshotBeforeSchemaExtension",
    "LdifContent",
    "Description"
  ],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    CreateSnapshotBeforeSchemaExtension: {
      shape: {
        type: "boolean"
      }
    },
    LdifContent: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
