import { _ResourceAttributeList } from "./_ResourceAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutResourceAttributesInput: _Structure_ = {
  type: "structure",
  required: [
    "ProgressUpdateStream",
    "MigrationTaskName",
    "ResourceAttributeList"
  ],
  members: {
    ProgressUpdateStream: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MigrationTaskName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceAttributeList: {
      shape: _ResourceAttributeList
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
