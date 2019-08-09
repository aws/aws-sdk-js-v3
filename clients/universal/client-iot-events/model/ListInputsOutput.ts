import { _InputSummaries } from "./_InputSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInputsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    inputSummaries: {
      shape: _InputSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
