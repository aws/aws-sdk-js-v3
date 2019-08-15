import { _ConditionalForwarders } from "./_ConditionalForwarders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConditionalForwardersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConditionalForwarders: {
      shape: _ConditionalForwarders
    }
  }
};
