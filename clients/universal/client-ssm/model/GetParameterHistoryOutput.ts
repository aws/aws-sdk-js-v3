import { _ParameterHistoryList } from "./_ParameterHistoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetParameterHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Parameters: {
      shape: _ParameterHistoryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
