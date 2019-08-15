import { _QueryCompileError } from "./_QueryCompileError";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const MalformedQueryException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    queryCompileError: {
      shape: _QueryCompileError
    }
  },
  exceptionType: "MalformedQueryException"
};
