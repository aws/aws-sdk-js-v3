import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQualificationRequestsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QualificationTypeId: {
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
