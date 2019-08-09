import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateDiscoveredResourceInput: _Structure_ = {
  type: "structure",
  required: ["ProgressUpdateStream", "MigrationTaskName", "ConfigurationId"],
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
    ConfigurationId: {
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
