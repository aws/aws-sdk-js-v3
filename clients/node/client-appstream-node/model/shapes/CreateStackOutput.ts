import { _Stack } from "./_Stack";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Stack: {
      shape: _Stack
    }
  }
};
