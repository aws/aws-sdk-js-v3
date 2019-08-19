import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTransformJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    LastModifiedTimeAfter: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTimeBefore: {
      shape: {
        type: "timestamp"
      }
    },
    NameContains: {
      shape: {
        type: "string"
      }
    },
    StatusEquals: {
      shape: {
        type: "string"
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
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
