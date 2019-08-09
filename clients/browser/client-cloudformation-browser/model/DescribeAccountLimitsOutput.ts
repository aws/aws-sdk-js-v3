import { _AccountLimitList } from "./_AccountLimitList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountLimits: {
      shape: _AccountLimitList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
