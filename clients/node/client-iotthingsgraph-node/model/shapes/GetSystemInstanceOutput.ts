import { _SystemInstanceDescription } from "./_SystemInstanceDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSystemInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    description: {
      shape: _SystemInstanceDescription
    }
  }
};
