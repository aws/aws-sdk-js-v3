import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLabelingJobsForWorkteamInput: _Structure_ = {
  type: "structure",
  required: ["WorkteamArn"],
  members: {
    WorkteamArn: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    CreationTimeAfter: {
      shape: {
        type: "timestamp"
      }
    },
    CreationTimeBefore: {
      shape: {
        type: "timestamp"
      }
    },
    JobReferenceCodeContains: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SortBy: {
      shape: {
        type: "string"
      }
    },
    SortOrder: {
      shape: {
        type: "string"
      }
    }
  }
};
