import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserImportJobsInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "MaxResults"],
  members: {
    UserPoolId: {
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
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
