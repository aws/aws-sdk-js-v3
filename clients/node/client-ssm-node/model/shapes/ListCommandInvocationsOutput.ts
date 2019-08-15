import { _CommandInvocationList } from "./_CommandInvocationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCommandInvocationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CommandInvocations: {
      shape: _CommandInvocationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
