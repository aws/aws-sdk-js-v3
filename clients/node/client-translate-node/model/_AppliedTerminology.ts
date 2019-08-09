import { _TermList } from "./_TermList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AppliedTerminology: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Terms: {
      shape: _TermList
    }
  }
};
