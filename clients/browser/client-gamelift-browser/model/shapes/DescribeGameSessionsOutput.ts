import { _GameSessionList } from "./_GameSessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGameSessionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessions: {
      shape: _GameSessionList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
