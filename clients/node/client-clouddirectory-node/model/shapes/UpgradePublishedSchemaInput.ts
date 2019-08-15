import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpgradePublishedSchemaInput: _Structure_ = {
  type: "structure",
  required: ["DevelopmentSchemaArn", "PublishedSchemaArn", "MinorVersion"],
  members: {
    DevelopmentSchemaArn: {
      shape: {
        type: "string"
      }
    },
    PublishedSchemaArn: {
      shape: {
        type: "string"
      }
    },
    MinorVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
