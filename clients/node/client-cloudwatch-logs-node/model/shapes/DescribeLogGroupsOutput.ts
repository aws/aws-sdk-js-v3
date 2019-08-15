import { _LogGroups } from "./_LogGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLogGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logGroups: {
      shape: _LogGroups
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
