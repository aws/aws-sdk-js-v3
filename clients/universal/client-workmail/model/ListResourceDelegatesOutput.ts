import { _ResourceDelegates } from "./_ResourceDelegates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceDelegatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Delegates: {
      shape: _ResourceDelegates
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
