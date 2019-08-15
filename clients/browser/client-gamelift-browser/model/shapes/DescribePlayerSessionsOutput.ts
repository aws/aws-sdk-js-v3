import { _PlayerSessionList } from "./_PlayerSessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePlayerSessionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerSessions: {
      shape: _PlayerSessionList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
