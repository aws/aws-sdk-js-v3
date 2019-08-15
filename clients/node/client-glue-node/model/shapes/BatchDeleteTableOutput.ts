import { _TableErrors } from "./_TableErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteTableOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Errors: {
      shape: _TableErrors
    }
  }
};
