import { _QueryInfoList } from "./_QueryInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeQueriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    queries: {
      shape: _QueryInfoList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
