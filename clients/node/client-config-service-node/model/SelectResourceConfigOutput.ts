import { _Results } from "./_Results";
import { _QueryInfo } from "./_QueryInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SelectResourceConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Results: {
      shape: _Results
    },
    QueryInfo: {
      shape: _QueryInfo
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
