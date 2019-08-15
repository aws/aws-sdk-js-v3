import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateCreatedArtifactInput: _Structure_ = {
  type: "structure",
  required: [
    "ProgressUpdateStream",
    "MigrationTaskName",
    "CreatedArtifactName"
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
    CreatedArtifactName: {
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
