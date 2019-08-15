import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNotebookInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    LastModifiedTimeBefore: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTimeAfter: {
      shape: {
        type: "timestamp"
      }
    },
    StatusEquals: {
      shape: {
        type: "string"
      }
    },
    NotebookInstanceLifecycleConfigNameContains: {
      shape: {
        type: "string"
      }
    },
    DefaultCodeRepositoryContains: {
      shape: {
        type: "string"
      }
    },
    AdditionalCodeRepositoryEquals: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
