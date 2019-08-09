import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCodeRepositoriesInput: _Structure_ = {
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
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NameContains: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
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
    }
  }
};
