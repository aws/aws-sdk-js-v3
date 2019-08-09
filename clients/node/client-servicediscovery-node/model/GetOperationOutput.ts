import { _Operation } from "./_Operation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOperationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Operation: {
      shape: _Operation
    }
  }
};
