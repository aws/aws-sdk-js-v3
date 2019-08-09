import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobState: {
      shape: {
        type: "string"
      }
    },
    IsMaster: {
      shape: {
        type: "boolean"
      }
    },
    JobType: {
      shape: {
        type: "string"
      }
    },
    SnowballType: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
