import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelSchemaExtensionInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "SchemaExtensionId"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    SchemaExtensionId: {
      shape: {
        type: "string"
      }
    }
  }
};
