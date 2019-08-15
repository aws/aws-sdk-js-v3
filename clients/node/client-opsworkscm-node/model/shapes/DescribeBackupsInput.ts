import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupId: {
      shape: {
        type: "string"
      }
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
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
