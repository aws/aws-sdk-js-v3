import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListModelsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    NameContains: {
      shape: {
        type: "string"
      }
    },
    CreationTimeBefore: {
      shape: {
        type: "timestamp"
      }
    },
    CreationTimeAfter: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
