import { _ServiceErrors } from "./_ServiceErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServiceErrorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceErrors: {
      shape: _ServiceErrors
    }
  }
};
