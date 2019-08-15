import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProblemsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
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
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
