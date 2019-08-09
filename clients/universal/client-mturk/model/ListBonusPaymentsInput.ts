import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBonusPaymentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssignmentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
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
