import { _TableVersionErrors } from "./_TableVersionErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteTableVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Errors: {
      shape: _TableVersionErrors
    }
  }
};
