import { _StackStatusFilter } from "./_StackStatusFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStacksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackStatusFilter: {
      shape: _StackStatusFilter
    }
  }
};
