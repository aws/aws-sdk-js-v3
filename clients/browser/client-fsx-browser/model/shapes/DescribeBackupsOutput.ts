import { _Backups } from "./_Backups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Backups: {
      shape: _Backups
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
