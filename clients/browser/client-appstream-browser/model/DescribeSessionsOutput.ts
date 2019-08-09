import { _SessionList } from "./_SessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSessionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Sessions: {
      shape: _SessionList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
