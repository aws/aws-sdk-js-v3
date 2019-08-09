import { _DiscoveredResource } from "./_DiscoveredResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDiscoveredResourceInput: _Structure_ = {
  type: "structure",
  required: ["ProgressUpdateStream", "MigrationTaskName", "DiscoveredResource"],
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
    DiscoveredResource: {
      shape: _DiscoveredResource
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
