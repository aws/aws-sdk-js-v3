import { _CreatedArtifact } from "./_CreatedArtifact";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateCreatedArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ProgressUpdateStream", "MigrationTaskName", "CreatedArtifact"],
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
    CreatedArtifact: {
      shape: _CreatedArtifact
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
