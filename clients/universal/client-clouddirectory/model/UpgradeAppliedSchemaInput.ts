import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpgradeAppliedSchemaInput: _Structure_ = {
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
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
