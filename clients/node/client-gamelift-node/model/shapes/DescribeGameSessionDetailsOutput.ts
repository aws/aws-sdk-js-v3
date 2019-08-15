import { _GameSessionDetailList } from "./_GameSessionDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGameSessionDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionDetails: {
      shape: _GameSessionDetailList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
