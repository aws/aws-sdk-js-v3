import { _BackupIds } from "./_BackupIds";
import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupIds: {
      shape: _BackupIds
    },
    Filters: {
      shape: _Filters
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
